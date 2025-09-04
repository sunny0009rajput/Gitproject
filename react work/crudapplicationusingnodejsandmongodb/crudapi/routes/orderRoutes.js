const express = require("express");
const router = express.Router();
const OrderModel = require("../models/Order");
const ProductModel = require("../models/Product");
const crypto = require("crypto");
const sendOrderConfirmation = require("../mailer");
const Razorpay = require("razorpay");
const PaymentModel = require("../models/Payment");
const { auth, requireAdmin } = require("../middleware/auth");
const getNextSequence = require("../helper/getNextSequence");
const {
  customerAuth,
  signToken,
  getCookieOptions,
} = require("../middleware/customerAuth");

// ✅ Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// ---------------- CREATE ORDER ---------------
router.post("/create-order", async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;

    const options = {
      amount: amount * 100, // Razorpay expects amount in paisa
      currency,
      receipt: receipt || "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      message: "Razorpay order created successfully",
      order,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create Razorpay order" });
  }
});

// ---------------- PLACE ORDER ----------------
router.post("/orders", customerAuth, async (req, res) => {
  console.log("Decoded user:", req.user);
  try {
    const {
      payment_method,
      products,
      total_amount,
      
      shipping_address,
    } = req.body;

    // Generate sequential order ID
    const orderNumber = await getNextSequence("order");
    const orderId = `ORD_${orderNumber}`;

    // products here might just be productId + qty
    // Fetch product snapshot for each
    const productSnapshots = await Promise.all(
      products.map(async (p) => {
        const prod = await ProductModel.findById(p.product);
        if (!prod) throw new Error("Product not found");

        return {
          product: prod._id,
          quantity: p.quantity,
          product_name: prod.product_name,
          product_price: prod.product_price,
          selected_color: p.color, // ✅ user selected color
      selected_size: p.size,   // ✅ user selected size
          product_color: Array.isArray(prod.product_color) ? prod.product_color.join(", ") : prod.product_color,
          product_category: prod.product_category,
          product_subcategory: prod.product_subcategory,
        };
      })
    );

    const order = new OrderModel({
      user: req.user.id, // ✅ logged-in user from token
      products: productSnapshots,
      total_amount,
      payment_method,
      orderId,
      shipping_address,
    });

    if (payment_method === "COD") {
      order.payment_verified = true;
      order.Order_status = "Order Placed";
      await order.save();
      return res.status(201).json({
        success: true,
        message: "Order placed successfully with Cash on Delivery",
        order,
      });
    } else if (payment_method === "ONLINE") {
      order.payment_verified = true;
      order.Order_status = "Order Placed";
      await order.save();
      return res.status(201).json({
        success: true,
        message: "Order created, awaiting payment verification.",
        order,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid payment method",
    });
  } catch (error) {
    console.error("Order error:", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ---------------- VERIFY PAYMENT ----------------
router.post("/orders/verify-payment", async (req, res) => {
  try {
    const {
      orderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign === razorpay_signature) {
      // ✅ Mark order as verified
      const order = await OrderModel.findOneAndUpdate(
        { orderId },
        { payment_verified: true, Order_status: "Order Placed" },
        { new: true }
      );

      const payment = new PaymentModel({
        orderId: order._id,
        payment_id: razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        status: "paid",
        amount: order.total_amount,
        payment_method: "ONLINE",
      });

      await payment.save();

      // send confirmation email
      // await sendOrderConfirmation(order.customer_email, order.customer_name, order.product_details.product_name);

      return res.status(200).json({
        success: true,
        message: "Payment verified, order placed successfully",
        order,
        payment,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/orders", auth, async (req, res) => {
  try {
    const orders = await OrderModel.find()
      .populate("user", "customer_name email customer_phone customer_address") // pick only required fields
      .populate(
        "products.product",
        "product_name product_price product_color product_category product_subcategory"
      );

    // Transform orders into frontend-friendly shape
    const formatted = orders.map((order) => ({
      _id: order._id,
      orderId: order.orderId,
      customer_name: order.user?.customer_name || "",
      customer_email: order.user?.email || "",
      customer_phone: order.user?.customer_phone || "",
      customer_address: {
        state: order.shipping_address?.state || "",
        city: order.shipping_address?.city || "",
        street: order.shipping_address?.street || "",
        zip: order.shipping_address?.postalCode || "",
      },
      Order_status: order.Order_status,
      order_date: order.order_date,
      payment_method: order.payment_method,
      total_amount: order.total_amount,
      delivery_date: order.delivery_date,
      delivey_charges: order.delivey_charges,
      hidden_charges: order.hidden_charges,
      // ✅ Use snapshot (not live product table)
      products: order.products.map(p => ({
        name: p.product_name,
        price: p.product_price,
        qty: p.quantity,
         color: p.selected_color,
        size: p.selected_size,     // use selected_size
  
        category: p.product_category,
        subcategory: p.product_subcategory
      }))
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error("Orders fetch error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/orders/:id", auth, async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id);
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/orders/:id", auth, requireAdmin, async (req, res) => {
  try {
    const orders = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!orders) {
      return res.status(404).send();
    }
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/orders/:id", auth, requireAdmin, async (req, res) => {
  try {
    const orders = await OrderModel.findByIdAndDelete(req.params.id);
    if (!orders) {
      return res.status(404).send();
    }
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

// ✅ Customer's own orders
router.get("/customer/orders", customerAuth, async (req, res) => {
  try {
    console.log("Inside /customer/orders");
    console.log("req.user:", req.user);

    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    const orders = await OrderModel.find({ user: req.user.id })
      .populate("products.product")
      .populate("user");

    console.log("Orders found:", orders.length);

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Orders fetch error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ Get single order by ID
router.get("/customer/orders/:id", customerAuth, async (req, res) => {
  try {
    const order = await OrderModel.findOne({
      _id: req.params.id,
      user: req.user.id,
    }).populate("products.productId");

    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
