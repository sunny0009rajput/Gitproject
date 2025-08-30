import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from './NavBar';
import Footer from "./Footer";


const statusSteps = ["Placed", "Packed", "Shipped", "Delivered"];

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${apiurl}/customer/orders`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setOrders(res.data.orders);
        } else {
          setOrders([]);
        }
      } catch (err) {
        console.error("Fetch orders error:", err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [apiurl]);

  const statusSteps = [
  "Order Placed",
    "Packaging",
    "Shipped",
    "Out for Delivery",
    "Delivered",
];

  const getProgress = (status) => {
  const index = statusSteps.indexOf(status);
  return index >= 0 ? ((index + 1) / statusSteps.length) * 100 : 0;
};

  return (
    <>
    
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>

      {loading ? (
        <p className="text-center">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-bold mb-2">
                Order #{order._id.slice(-6)}
              </h2>
              <p className="mb-2">
                <span className="font-semibold">Payment:</span>{" "}
                {order.payment_method}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Total:</span> ₹
                {order.total_amount}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${getProgress(order.Order_status)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                {statusSteps.map((step) => (
                  <span
                    key={step}
                    className={
                      step === order.Order_status
                        ? "font-bold text-purple-600"
                        : ""
                    }
                  >
                    {step}
                  </span>
                ))}
              </div>

              {/* Products */}
              <h3 className="font-semibold">Product Name:</h3>
              <ul className="list-disc pl-5">
                {order.products.map((p) => (
                  <li key={p._id}>
                    {p.product?.product_name || "Product"}, quantity : {p.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default TrackOrder;
