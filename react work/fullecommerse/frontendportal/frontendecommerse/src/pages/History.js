import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { toast } from "react-hot-toast";
const History = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [review, setReview] = useState({ rating: 0, comment: "" });

  const apiurl = process.env.REACT_APP_BACKEND_URL;
  

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${apiurl}/customer/orders`, {
          withCredentials: true,
        });
        if (res.data.success) {
          // ✅ Filter delivered only
          const deliveredOrders = res.data.orders.filter(
            (order) => order.Order_status === "Delivered"
          );
          setOrders(deliveredOrders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Fetch orders error:", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [apiurl]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setReview({ rating: 0, comment: "" });
    setShowModal(true);
  };

  const handleSubmitReview = async () => {
    if (!review.rating || !review.comment) {
      return alert("Please provide both rating and comment");
    }

    try {
      await axios.post(
        `${apiurl}/products/${selectedProduct._id}/reviews`,
        review,
        { withCredentials: true }
      );
      toast.success("Review submitted successfully!");
      setShowModal(false);
      // ✅ Remove product from history after review
      setOrders((prevOrders) =>
        prevOrders
          .map((order) => ({
            ...order,
            products: order.products.filter(
              (p) => p.product?._id !== selectedProduct._id
            ),
          }))
          .filter((order) => order.products.length > 0) // remove empty orders
      );
    } catch (error) {
      console.error("Review error:", error.response?.data || error.message);
      toast.error("Could not submit review");
    }
  };

  return (
    <>
     
      <div className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6 text-center">Order History</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-600">
            No delivered orders yet.
          </p>
        ) : (
          <div className="space-y-6 max-w-4xl mx-auto">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-bold mb-2">
                  Order #{order._id.slice(-6)}
                </h2>
                <p className="mb-2">
                  <span className="font-semibold">Total:</span> ₹
                  {order.total_amount}
                </p>

                <h3 className="font-semibold mt-3">Products:</h3>
                <ul className="space-y-3 mt-2">
                  {order.products.map((p) => (
                    <li
                      key={p._id}
                      className="flex justify-between items-center border p-3 rounded-lg"
                    >
                      <span>
                        {p.product?.product_name || "Product"} | Qty:{" "}
                        {p.quantity}
                      </span>
                      <button
                        className="px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                        onClick={() => openModal(p.product)}
                      >
                        Rate Order
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />

      {/* ✅ Review Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">
              Review {selectedProduct.product_name}
            </h2>

            {/* Stars */}
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${
                    review.rating >= star
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setReview({ ...review, rating: star })}
                />
              ))}
            </div>

            {/* Comment */}
            <textarea
              className="w-full border rounded-lg p-2 mb-4 text-sm"
              placeholder="Write your comment..."
              value={review.comment}
              onChange={(e) =>
                setReview({ ...review, comment: e.target.value })
              }
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default History;
