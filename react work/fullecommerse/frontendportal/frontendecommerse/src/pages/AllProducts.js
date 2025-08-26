import React, { useState, useEffect } from "react";
import axios from "axios";
import { Star, Heart } from "lucide-react";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isFavorited, setIsFavorited] = useState({});
  const [loading, setLoading] = useState(true);
  

  const apiurl = "http://localhost:5000";

  // Fetch products from API with axios

  const fetchProducts = async () =>{
    try{
        const res = await axios.get(`${apiurl}/products`);
        const data = res.data;
        // always set as array
        setProducts(Array.isArray(data) ? data : [data]);
    }catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]); // fallback empty array
      } finally {
        setLoading(false);
      }
  }



  useEffect(()=>{
    fetchProducts();
  },[]);

  // Handle wishlist/favorite toggle
  const handleFavorite = (id) => {
    setIsFavorited((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-lg font-semibold text-gray-600">
        Loading products...
      </div>
    );
  }

  return (
    <div>
      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved pieces that customers can't get enough of
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                  <img
                    src={product.mainPhoto || "/placeholder.png"}
                    alt={product.product_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={() => handleFavorite(product._id)}
                    className={`absolute top-5 right-4 z-20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
                      isFavorited[product._id]
                        ? "bg-red-500 text-white scale-110 animate-bounce"
                        : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        isFavorited[product._id] ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {product.product_name}
                  </h3>

                  {/* Rating (static for now, since backend doesn’t have rating field) */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 // dummy rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(12)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.product_price?.toLocaleString()}
                    </span>
                  </div>

                  {/* Category / Brand */}
                  {/* <p className="text-sm text-gray-500 mt-2">
                    {product.product_category} • {product.brand}
                  </p> */}
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No products found
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AllProducts;
