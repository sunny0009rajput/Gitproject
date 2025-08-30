import React, { useState, useEffect } from "react";
import axios from "axios";
import { X, Heart, ShoppingBag } from "lucide-react";
import { useWishlist } from "./WishlistContext"; // adjust path
import { useNavigate } from "react-router-dom";
const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { wishlist, removeFromWishlist } = useWishlist(); // ✅ use global wishlist
  const navigate = useNavigate();
  const apiurl = process.env.REACT_APP_BACKEND_URL; // 🔹 change if your backend runs elsewhere
  const token = localStorage.getItem("customerToken");

  // 👉 Fetch wishlist from backend
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get(`${apiurl}/wishlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // res.data.products is populated array of Product objects
        if (res.data && res.data.products) {
          setWishlistItems(res.data.products);
        } else {
          setWishlistItems([]);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [token]);

  // 👉 Remove product from wishlist

  const moveToCart = (id) => {
    // TODO: call your cart API here
    console.log(`Moving item ${id} to cart`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-red-500 fill-current" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Wishlist
            </h1>
          </div>
          <p className="text-gray-600">{wishlistItems.length} items</p>
        </div>

        {/* Wishlist Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/products/${item._id}`)} 
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                  <img
                    src={item.mainPhotoBase64 || "/default-product.jpg"}
                    alt={item.product_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(item._id);
                      setWishlistItems((prev) =>
                        prev.filter((p) => p._id !== item._id)
                      ); // instantly update UI
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {item.product_name}
                  </h3>

                  {/* Price Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      Rs.{item.product_price?.toLocaleString()}
                    </span>
                  </div>

                  {/* Move to Cart Button */}
                  <button
                    onClick={() => navigate(`/products/${item._id}`)}
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    MOVE TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-gray-500 mb-6">
              Save items you love to your wishlist
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
