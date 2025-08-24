const express = require('express');
const router = express.Router();
const OrderModel = require('../models/Order');
const crypto = require("crypto");
const sendOrderConfirmation = require('../mailer');
const  Razorpay = require("razorpay");
const PaymentModel = require('../models/Payment');
const { auth, requireAdmin } = require('../middleware/auth');

// ✅ Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});


// ---------------- CREATE ORDER ---------------
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;

    const options = {
      amount: amount * 100, // Razorpay expects amount in paisa
      currency,
      receipt: receipt || "receipt_" + Date.now()
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      message: "Razorpay order created successfully",
      order
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ success: false, message: "Failed to create Razorpay order" });
  }
});

// ---------------- PLACE ORDER ----------------
router.post('/orders',auth, async (req, res) => {
    try {
        const {payment_method} = req.body;

        if(payment_method == "COD"){
            const order = new OrderModel(req.body);
            order.payment_verified = true;
            await order.save();

            // send confirmation email
        // await sendOrderConfirmation(order.customer_email, order.customer_name, order.product_details.product_name);
        return res.status(201).json({
            success: true,
            message: "Order placed successfully with Cash on Delivery",
            order

        });
    } else if(payment_method === "ONLINE"){
        const order = new OrderModel(req.body);
        order.payment_verified = false;
        order.Order_status = "Payment Pending";
        await order.save();
        return res.status(201).json({
            success: true,
            message: "Order created. awaiting payment verification.",
            order
        });
    }
    return res.status(400).json({
        success: false,
        message: "Invalid payment method"
    });
}catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// ---------------- VERIFY PAYMENT ----------------
router.post('/orders/verify-payment', async (req, res) => {
    try {
        const { orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (expectedSign === razorpay_signature) {
            // ✅ Mark order as verified
            const order = await OrderModel.findOneAndUpdate(
                { orderId },
                { payment_verified: true, Order_status: "Placed" },
                { new: true }
            );

            const payment = new PaymentModel({
                orderId: order._id,
                payment_id: razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                status: "Success",
                amount: order.total_amount,
                payment_method: "ONLINE"
            });

            await payment.save();

            // send confirmation email
            // await sendOrderConfirmation(order.customer_email, order.customer_name, order.product_details.product_name);

            return res.status(200).json({
                success: true,
                message: "Payment verified, order placed successfully",
                order,
                payment
            });
        } else {
            return res.status(400).json({ success: false, message: "Payment verification failed" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
            

router.get('/orders',auth, async (req, res) => {
    try {
        const orders = await OrderModel.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
}
);
router.get('/orders/:id',auth, async (req, res) => {
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

router.put('/orders/:id',auth,requireAdmin, async (req, res) => {
    try {
        const orders = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!orders) {
            return res.status(404).send();
        }
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/orders/:id',auth,requireAdmin, async (req, res) => {
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

module.exports = router;