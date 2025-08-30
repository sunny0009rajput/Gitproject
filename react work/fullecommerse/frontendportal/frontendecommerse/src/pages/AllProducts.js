import React, { useState, useEffect } from "react";
import axios from "axios";
import { Star, Heart } from "lucide-react";
import { useNavigate,useLocation } from "react-router-dom"; // ✅ import navigation
import { useWishlist } from './WishlistContext';


function AllProducts() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const brand = searchParams.get("brand") || "";
  const [products, setProducts] = useState([]);
  const [isFavorited, setIsFavorited] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ initialize navigation
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const apiurl = process.env.REACT_APP_BACKEND_URL;

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${apiurl}/products`);
      let data = res.data;
      console.log("API response:", res.data);

      // Ensure it's an array
    if (!Array.isArray(data)) {
      data = [data];
    }

      // Filter products based on search query
    if (searchQuery || category || brand) {
      const query = searchQuery.toLowerCase().trim();

      data = data.filter((p) => {
        const fields = [
          p.product_name,
          p.product_description,
          p.product_category,
          p.product_subcategory,
          p.brand,
        ]
          .filter(Boolean) // remove undefined/null
          .map((f) => f.toLowerCase());

        // ✅ check filters
          const matchesSearch = query
            ? fields.some((field) => field.includes(query))
            : true;

          const matchesCategory = category
            ? p.product_category?.toLowerCase().trim() === category.toLowerCase().trim()
            : true;

          const matchesBrand = brand
            ? p.brand?.toLowerCase().trim() === brand.toLowerCase().trim()
            : true;

          return matchesSearch && matchesCategory && matchesBrand;
        });
      }

      setProducts(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, [searchQuery, category, brand]);

   // sync local "isFavorited" with wishlist from context
  useEffect(() => {
    const favMap = {};
    wishlist.forEach(id => { favMap[id] = true; });
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
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };



  const handleProductClick = (id) => {
    navigate(`/products/${id}`); // ✅ go to product page
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-lg font-semibold text-gray-600">
        Loading products...
      </div>
    );
  }

  

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            All Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved pieces that customers can't get enough of
          </p>
          {/* ✅ Show active filters */}
          <div className="mt-4 text-gray-500">
            {searchQuery && <span>Search: "{searchQuery}" </span>}
            {category && <span> | Category: {category} </span>}
            {brand && <span> | Brand: {brand} </span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleProductClick(product._id)} // ✅ click event
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                <img
                  src={product.mainPhoto || "/placeholder.png"}
                  alt={product.product_name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Wishlist Button */}
                <button
                  onClick={(e) => handleFavorite(product._id, e)} // ✅ prevent propagation
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

              {/* Info */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.product_name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(12)</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.product_price?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center text-gray-500 mt-8">No products found</div>
        )}
      </div>
    </section>
  );
}

export default AllProducts;
