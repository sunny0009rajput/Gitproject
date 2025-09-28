import React, { useState,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ChevronDown, Plus, Tag, CreditCard, ShoppingBag } from "lucide-react";

export default function Price() {
  const apiurl = process.env.REACT_APP_BACKEND_URL;
  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY;
  const [customer, setCustomer] = useState(null);

  // ----- Demo course data -----
  const course = {
    _id: "youtube",
    title: "The YouTube",
    instructor: "John Doe",
    price: 4999, // base price without GST
    image:
      "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42843b_Frame%20237864%20(1).png",
    description:
      "Learn how to become a successful YouTuber—ideate, script, film, and grow your channel to lakhs of followers.",
  };

  // ----- Billing form -----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coupon: "",
    gstNumber: "",
  });
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [showCoupon, setShowCoupon] = useState(false);
  const [showGST, setShowGST] = useState(false);

  useEffect(() => {
  axios.get(`${apiurl}/customer/customerme`, { withCredentials: true })
    .then(res => setCustomer(res.data.user))
    .catch(() => setCustomer(null));
}, []);

  // ----- Pricing -----
  const gstRate = 0.18;
  const basePrice = course.price;
  const priceWithGST = basePrice * (1 + gstRate);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const discountedTotal = Math.max(priceWithGST - couponDiscount, 0);

  // ----- Payment -----
  const [isPlacing, setIsPlacing] = useState(false);

  const ensureRazorpayLoaded = () =>
    new Promise((resolve, reject) => {
      if (window.Razorpay) return resolve();
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
      document.body.appendChild(script);
    });

  const applyCoupon = async () => {
    if (!formData.coupon) return toast.error("Enter a coupon code");
    try {
      const { data } = await axios.post(
        `${apiurl}/apply-coupon`,
        { code: formData.coupon, courseId: course._id },
        { withCredentials: true }
      );
      if (data.valid) {
        setCouponDiscount(data.discountAmount);
        toast.success(`Coupon applied! Discount ₹${data.discountAmount}`);
      } else {
        toast.error("Invalid coupon");
        setCouponDiscount(0);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error applying coupon");
    }
  };

  const startPayment = async () => {
    // ----- Validate required fields -----
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      toast.error("Name, Email, and Phone are required");
      return;
    }
    try {
      setIsPlacing(true);
      await ensureRazorpayLoaded();

      // Create backend order (Razorpay needs paise)
      const { data } = await axios.post(
        `${apiurl}/create-order`,
        {
          amount: Math.round(discountedTotal * 100),
          orderId: `COURSE_${course._id}_${Date.now()}`,
        },
        { withCredentials: true }
      );

      const { order, key } = data;
      const options = {
        key: key || razorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: "Course Purchase",
        description: course.title,
        order_id: order.id,
        handler: async (response) => {
          try {
            const verifyRes = await axios.post(
              `${apiurl}/verify-payment`,
              {
                ...response,
                billingInfo: formData,
                finalAmount: discountedTotal,
                courseId: course._id,
                customerId: customer._id,
              },
              { withCredentials: true }
            );

            if (verifyRes.data?.message === "Payment verified successfully") {
              toast.success("Payment successful! 🎉");
            } else {
              toast.error("Payment verification failed");
            }
          } catch (err) {
            console.error(err);
            toast.error("Verification error");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#3399cc" },
      };

      const rz = new window.Razorpay(options);
      rz.on("payment.failed", (resp) =>
        toast.error("Payment failed: " + resp.error.description)
      );
      rz.open();
    } catch (err) {
      console.error("startPayment error:", err);
      toast.error("Failed to initiate payment");
    } finally {
      setIsPlacing(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 bg-black/90 py-4 px-4 sm:py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-10">
        {/* ==== Left: Image & Text ==== */}
        <div className="bg-gray-700 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {course.title}
          </h1>
          <p className="text-white mb-4">Instructor: {course.instructor}</p>
          <div className="mb-6">
            <span className="text-3xl font-bold text-white">
              ₹{priceWithGST.toFixed(2)}
            </span>
            <span className="text-white ml-2">(incl. GST)</span>
          </div>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
          <p className="text-white">{course.description}</p>
        </div>

        {/* ==== Right: Billing & Payment ==== */}
        <div className="bg-gray-700 rounded-lg shadow-sm p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Payment details
          </h2>

          {/* Billing Info */}
          <div className="space-y-4 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* Coupon */}
          <button
            onClick={() => setShowCoupon(!showCoupon)}
            className="flex items-center justify-between w-full text-left py-3 text-white mb-3"
          >
            <div className="flex items-center">
              <Tag className="w-5 h-5 mr-2" />
              <span>Have a coupon?</span>
            </div>
            <Plus className={`w-5 h-5 ${showCoupon ? "rotate-45" : ""}`} />
          </button>
          {showCoupon && (
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                name="coupon"
                placeholder="Enter coupon code"
                value={formData.coupon}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 rounded-lg outline-none"
              />
              <button
                onClick={applyCoupon}
                className="px-4 py-3 bg-blue-500 text-white rounded-lg"
              >
                Apply
              </button>
            </div>
          )}

          {/* GST */}
          <button
            onClick={() => setShowGST(!showGST)}
            className="flex items-center justify-between w-full text-left py-3 text-white mb-3"
          >
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              <span>Add GST (optional)</span>
            </div>
            <Plus className={`w-5 h-5 ${showGST ? "rotate-45" : ""}`} />
          </button>
          {showGST && (
            <input
              type="text"
              name="gstNumber"
              placeholder="Enter GST number"
              value={formData.gstNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 mb-6 rounded-lg outline-none"
            />
          )}

          {/* Summary */}
          <div className="mb-6 space-y-2 text-white">
            <div className="flex justify-between">
              <span>Course price (incl GST)</span>
              <span>₹{priceWithGST.toFixed(2)}</span>
            </div>
            {couponDiscount > 0 && (
              <div className="flex justify-between text-green-400">
                <span>Coupon Discount</span>
                <span>-₹{couponDiscount.toFixed(2)}</span>
              </div>
            )}
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{discountedTotal}</span>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={startPayment}
            disabled={isPlacing}
            className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 ${
              isPlacing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 text-white"
            }`}
          >
            <ShoppingBag className="w-6 h-6" />
            {isPlacing ? "Processing..." : `Pay ₹${discountedTotal}`}
          </button>
        </div>
      </div>
    </div>
  );
}
