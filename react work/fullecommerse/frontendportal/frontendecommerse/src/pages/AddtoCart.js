import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Minus, X, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";
import toast from "react-hot-toast";
export default function ShoppingCartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [orderId, setOrderId] = useState(null);
  const [isPlacing, setIsPlacing] = useState(false);
  // Address states
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressForm, setAddressForm] = useState({
    country: "",
    state: "",
    city: "",
    street: "",
    postalCode: "",
  });

  const apiurl = process.env.REACT_APP_BACKEND_URL;
  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY;
  console.log("Razorpay key from env:", process.env.REACT_APP_RAZORPAY_KEY);
  // fetch addresses
  const fetchAddresses = async () => {
    try {
      const res = await axios.get(`${apiurl}/customer/addresses`, {
        withCredentials: true,
      });
      setAddresses(res.data);

      const defaultAddr = res.data.find((a) => a.isDefault);
      if (defaultAddr) {
        setDeliveryLocation(
          `${defaultAddr.street}, ${defaultAddr.city}, ${defaultAddr.state} - ${defaultAddr.postalCode}, ${defaultAddr.country}`
        );
        setSelectedAddress(defaultAddr);
      }
    } catch (err) {
      console.error("Error fetching addresses", err);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  // save / update address
  const handleSaveOrUpdateAddress = async () => {
    try {
      if (editingAddress) {
        await axios.put(
          `${apiurl}/customer/addresses/${editingAddress._id}`,
          addressForm,
          { withCredentials: true }
        );
      } else {
        await axios.post(`${apiurl}/customer/addresses`, addressForm, {
          withCredentials: true,
        });
      }
      await fetchAddresses();
      setIsAddressModalOpen(false);
      setEditingAddress(null);
      setAddressForm({
        country: "",
        state: "",
        city: "",
        street: "",
        postalCode: "",
      });
    } catch (err) {
      console.error("Error saving address", err);
    }
  };

  // edit address
  const handleEditAddress = (addr) => {
    setEditingAddress(addr);
    setAddressForm({
      country: addr.country || "",
      state: addr.state || "",
      city: addr.city || "",
      street: addr.street || "",
      postalCode: addr.postalCode || "",
    });
    setIsAddressModalOpen(true);
  };

  // delete address
  const handleDeleteAddress = async (id) => {
    try {
      await axios.delete(`${apiurl}/customer/addresses/${id}`, {
        withCredentials: true,
      });
      await fetchAddresses();
    } catch (err) {
      console.error("Error deleting address", err);
    }
  };

  // order id generator
  const generateOrderId = (customerName) => {
    const random6 = Math.floor(100000 + Math.random() * 900000);
    return `ORD_${customerName.replace(/\s+/g, "").toUpperCase()}_${random6}`;
  };

  // Helper: dynamically load Razorpay script if not already present
  const ensureRazorpayLoaded = () =>
    new Promise((resolve, reject) => {
      if (window.Razorpay) return resolve();
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
      document.body.appendChild(script);
    });

  // post order API
  

  // Main place-order button handler
  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }

    if (cart.length === 0) return;

    if (paymentMethod === "ONLINE") {
      await startOnlinePayment();
    } else {
      await createStoreOrder({ paymentStatus: "COD" });
    }
  };

  // Creates your store order (your own /orders API) after either COD selection or successful online payment
  const createStoreOrder = async ({
    paymentStatus = "COD",
    paymentMeta = null,
  }) => {
    try {
      setIsPlacing(true);
      const newOrderId = generateOrderId("Customer");
      setOrderId(newOrderId);

      const token = localStorage.getItem("customerToken");

      const orderData = {
        orderId: newOrderId,
        products: cart.map((item) => ({
          product: item.product?._id || item._id,
          quantity: item.quantity,
          size: item.size,     // ✅ selected size
        color: item.color,  
        })),
        payment_method: paymentMethod, // "COD" or "ONLINE"
        total_amount: total,
        shipping_address: {
          street: selectedAddress.street,
          city: selectedAddress.city,
          state: selectedAddress.state,
          postalCode: selectedAddress.postalCode,
          country: selectedAddress.country,
        },
        // Optional fields if your Order schema supports them:
        payment_status: paymentStatus === "COD" ? "Pending" : "Success",
        payment_reference: paymentMeta?.razorpay_payment_id || null,
        payment_details: paymentMeta || null,
      };

      await axios.post(`${apiurl}/orders`, orderData, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        withCredentials: true,
      });

      // ✅ Show success notification
      toast.success("Order placed successfully! 🎉");
      // ✅ Empty the cart
      clearCart?.();
    } catch (err) {
      console.error("Error placing order", err);
      toast.error("Order failed, please try again.");
    } finally {
      setIsPlacing(false);
    }
  };

  // Starts Razorpay Checkout flow
  // put this in your component (replace existing startOnlinePayment)
  const startOnlinePayment = async () => {
    setIsPlacing(true);
    try {
      await ensureRazorpayLoaded();

      const newOrderId = generateOrderId("Customer");
      setOrderId(newOrderId);

      // send orderId to backend so it becomes Razorpay receipt
      const { data } = await axios.post(
        `${apiurl}/create-order`,
        { amount: total, orderId: newOrderId },
        { withCredentials: true }
      );

      const order = data.order;
      const keyToUse = data.key || razorpayKey;

      const options = {
        key: keyToUse,
        amount: order.amount,
        currency: order.currency,
        name: "Your Store",
        description: "Order Payment",
        order_id: order.id,
        handler: async (response) => {
          // verify payment on backend
          const verifyRes = await axios.post(
            `${apiurl}/verify-payment`,
            response,
            { withCredentials: true }
          );

          if (verifyRes.data?.message === "Payment verified successfully") {

            // ✅ Save order in your DB
      await createStoreOrder({
        paymentStatus: "Success",
        paymentMeta: { ...response, amount: order.amount / 100 },
      });

             toast.success("Payment successful 🎉");
             clearCart?.();
            
          } else {
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rz = new window.Razorpay(options);
      rz.on("payment.failed", (resp) =>
        alert("Payment failed: " + resp.error.description)
      );
      rz.open();
    } catch (err) {
      console.error("startOnlinePayment error:", err);
      alert("Failed to start payment");
    } finally {
      setIsPlacing(false);
    }
  };

  

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Shopping Cart
        </h1>

        {/* ---------- 2 Rows Layout ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* -------- Row 1: Address + Cart Items -------- */}
          <div className="space-y-6">
            {/* Address Section */}
            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-4">Deliver to</h3>

              {addresses.length === 0 ? (
                <p className="text-gray-500">
                  No saved addresses. Please add one.
                </p>
              ) : (
                <div className="flex flex-wrap gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr._id}
                      className={`w-60 p-4 rounded-2xl border transition-all relative ${
                        selectedAddress?._id === addr._id
                          ? "border-blue-500 shadow-md bg-blue-50"
                          : "border-gray-200 hover:border-blue-400"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <input
                          type="radio"
                          checked={selectedAddress?._id === addr._id}
                          onChange={() => {
                            setSelectedAddress(addr);
                            setDeliveryLocation(
                              `${addr.street}, ${addr.city}, ${addr.state} - ${addr.postalCode}, ${addr.country}`
                            );
                          }}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm leading-snug">
                            {addr.street}, {addr.city}
                          </p>
                          <p className="text-xs text-gray-500">
                            {addr.state} - {addr.postalCode}, {addr.country}
                          </p>
                          {addr.isDefault && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mt-1 inline-block">
                              Default
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2 mt-3">
                        <button
                          onClick={() => handleEditAddress(addr)}
                          className="text-xs text-blue-600 hover:underline"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteAddress(addr._id)}
                          className="text-xs text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => {
                  setEditingAddress(null);
                  setAddressForm({
                    country: "",
                    state: "",
                    city: "",
                    street: "",
                    postalCode: "",
                  });
                  setIsAddressModalOpen(true);
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              >
                + Add New Address
              </button>
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 lg:p-6 border-b bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900">
                  {cart.length} Items Selected
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-4 lg:p-6 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-shrink-0 w-full sm:w-32 h-40 sm:h-32">
                        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={item.mainPhotoBase64}
                            alt={item.product_name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">
                              {item.product_name}
                            </h3>
                            <p className="font-semibold text-gray-600 text-sm mb-2">
                              {item.color}
                              
                            </p>
                            <p className="font-semibold text-gray-600 text-sm mb-2">
                              {item.size}
                              
                            </p>
                          </div>

                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl font-bold text-gray-900">
                              ₹{item.product_price}
                            </span>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                              <button
                                
                                className="p-2 hover:bg-gray-100"
                                
                              >
                               
                              </button>
                              <span className="px-4 py-2 font-medium text-center">
                                {item.quantity}
                              </span>
                              <button
                                
                                className="p-2 hover:bg-gray-100"
                              >
                                
                              </button>
                            </div>

                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* -------- Row 2: Order Summary -------- */}
          <div>
            <div className="sticky top-6 bg-white rounded-xl p-6 shadow-sm border space-y-6">
              <h3 className="font-semibold text-gray-900">Order Summary</h3>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between font-bold text-lg text-gray-900">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="ONLINE"
                    checked={paymentMethod === "ONLINE"}
                    onChange={() => setPaymentMethod("ONLINE")}
                  />
                  <span>Online Payment</span>
                </label>
              </div>

              <button
                disabled={cart.length === 0}
                onClick={handlePlaceOrder}
                className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 ${
                  cart.length === 0
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:scale-105 transition-all"
                }`}
              >
                <ShoppingBag className="w-6 h-6" />
                <span>
                  {isPlacing
                    ? paymentMethod === "ONLINE"
                      ? "Processing Payment..."
                      : "Placing Order..."
                    : "Place Order"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              {editingAddress ? "Update Address" : "Add New Address"}
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                value={addressForm.street}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, street: e.target.value })
                }
                placeholder="Street"
                className="w-full border rounded-lg p-2 text-sm"
              />
              <input
                type="text"
                value={addressForm.city}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, city: e.target.value })
                }
                placeholder="City"
                className="w-full border rounded-lg p-2 text-sm"
              />
              <input
                type="text"
                value={addressForm.state}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, state: e.target.value })
                }
                placeholder="State"
                className="w-full border rounded-lg p-2 text-sm"
              />
              <input
                type="text"
                value={addressForm.postalCode}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, postalCode: e.target.value })
                }
                placeholder="Postal Code"
                className="w-full border rounded-lg p-2 text-sm"
              />
              <input
                type="text"
                value={addressForm.country}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, country: e.target.value })
                }
                placeholder="Country"
                className="w-full border rounded-lg p-2 text-sm"
              />
            </div>

            <div className="flex justify-end space-x-2 mt-5">
              <button
                onClick={() => setIsAddressModalOpen(false)}
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveOrUpdateAddress}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              >
                {editingAddress ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
