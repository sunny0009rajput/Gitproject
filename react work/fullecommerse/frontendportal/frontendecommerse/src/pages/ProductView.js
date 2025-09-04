import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // ✅ Get productId from URL
import axios from "axios";
import { useWishlist } from "./WishlistContext";
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductView() {
  const { id } = useParams(); // ✅ product ID from route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const { addToCart } = useCart();
  const [isFavorited, setIsFavorited] = useState({});
  const [animateFavorite, setAnimateFavorite] = useState(false);
  const navigate = useNavigate();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  // ✅ Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${apiurl}/products/${id}`);
        const p = res.data;

        // 🔹 Normalize fields
        const normalizedProduct = {
          id: p._id,
          name: p.product_name,
          price: p.product_price,
          description: p.product_description,
          category: p.product_category,
          sizes: p.product_size || [],
          colors: p.product_color || [],
          avgRating: typeof p.avgRating === "number" ? p.avgRating : 0,
          totalReviews: p.totalReviews || 0,
          reviews: p.reviews || [],
          images:
            [p.mainPhoto, p.sub1Photo, p.sub2Photo, p.sub3Photo].filter(Boolean)
              .length > 0
              ? [p.mainPhoto, p.sub1Photo, p.sub2Photo, p.sub3Photo].filter(
                  Boolean
                )
              : ["/placeholder.png"], // 👈 always at least one image
        };

        setProduct(normalizedProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, apiurl]);

  const handleMouseMove = (e) => {
    if (!isZooming) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleAddToCart = () => {
    const token = localStorage.getItem("customerToken");
    if (!token) {
      // redirect to login with redirect param
      navigate("/login?redirect=/cartsection");
      return;
    }
    // ✅ Validation
    if (!selectedSize) {
      setSuccessMsg("⚠️ Please select a size");
      return;
    }
    if (product.colors.length > 0 && !selectedColor) {
      setSuccessMsg("⚠️ Please select a color");
      return;
    }
    addToCart(product.id, selectedSize, selectedColor, quantity);
    // ✅ Show success message
    setSuccessMsg("✅ Product added to cart successfully!");
    // Hide message after 3s
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // sync local "isFavorited" with wishlist from context
  useEffect(() => {
    const favMap = {};
    wishlist.forEach((id) => {
      favMap[id] = true;
    });
    setIsFavorited(favMap);
  }, [wishlist]);

  const handleFavorite = async (id, e) => {
    e.stopPropagation();
    const token = localStorage.getItem("customerToken");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      if (isFavorited[id]) {
        await removeFromWishlist(id);
      } else {
        await addToWishlist(id);
      }

      // Trigger bounce animation
    setAnimateFavorite(true);
    setTimeout(() => setAnimateFavorite(false), 600); 
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ✅ Success Message */}
        {successMsg && (
          <div className="mb-4 flex items-center gap-2 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl shadow">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-medium">{successMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div
                className="relative aspect-[4/5] overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
                onMouseMove={handleMouseMove}
              >
                {product.images.length > 0 && (
                  <img
                    src={product.images[selectedImage]} // ✅ Dynamic image
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      isZooming ? "scale-150" : "scale-100"
                    }`}
                    style={
                      isZooming
                        ? {
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          }
                        : {}
                    }
                  />
                )}

                {/* Navigation */}
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev > 0 ? prev - 1 : product.images.length - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev < product.images.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square bg-white rounded-xl overflow-hidden ${
                    selectedImage === idx
                      ? "ring-2 ring-pink-500 shadow-lg scale-105"
                      : "hover:scale-105 hover:shadow-md"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="relative flex items-center justify-between mb-2">
  <span className="text-sm text-pink-600 font-medium">{product.category}</span>
  <button
    onClick={(e) => handleFavorite(product.id, e)}
    className={`absolute top-5 right-4 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
    isFavorited[product.id]
      ? `bg-red-500 text-white ${animateFavorite ? "animate-bounce" : ""}`
      : "bg-white text-gray-600 hover:bg-white hover:text-red-500"
  }`}
  >
    <Heart
      className={`w-5 h-5 transition-all duration-300 ${
        isFavorited[product.id] ? "fill-current" : ""
      }`}
    />
  </button>
</div>

              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.shortDescription}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.price}
              </span>
            </div>

            {/* Sizes */}
            {product.sizes && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl border-2 ${
                        selectedSize === size
                          ? "border-pink-500 bg-pink-500 text-white"
                          : "border-gray-300 hover:border-pink-300 hover:bg-pink-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl border-2 text-sm font-medium
            ${
              selectedColor === color
                ? "border-pink-500 bg-pink-500 text-white"
                : "border-gray-300 hover:border-pink-300 hover:bg-pink-50"
            }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus />
                </button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full mt-4 bg-pink-500 text-white py-4 rounded-xl flex items-center justify-center space-x-2"
              >
                <ShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Product Details</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Reviews */}
            {/* Reviews */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>

              {/* ⭐ Average rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.avgRating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {(product.avgRating || 0).toFixed(1)} / 5 (
                  {product.totalReviews || 0} reviews)
                </span>
              </div>

              {/* Individual reviews */}
              {product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 pb-4 mb-4 last:mb-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{review.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No reviews yet. Be the first to review!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
