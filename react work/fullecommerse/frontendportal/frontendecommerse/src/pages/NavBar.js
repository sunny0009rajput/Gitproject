import React, { useState, useRef, useEffect } from "react";
import { useWishlist } from "./WishlistContext";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Package,
  Edit3,
  LogOut,
} from "lucide-react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext";

const ResponsiveNavbar = () => {
  const [customer, setCustomer] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const inputRef = useRef(null);
  const apiurl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const profileButtonRef = useRef(null);

  // ✅ Fetch customer info
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await axios.get(`${apiurl}/customer/customerme`, {
          withCredentials: true,
           headers: { "Cache-Control": "no-store" },
        });
        console.log("Customer fetched:", res.data);
        setCustomer(res.data.user); // { id, username, email }
      } catch (err) {
        console.log("No customer:", err.response?.data || err.message);

        setCustomer(null); // not logged in
      }
    };
    fetchCustomer();
  }, [apiurl, location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${apiurl}/customer/customerlogout`,
        {},
        { withCredentials: true }
      );
      localStorage.clear();
      setCustomer(null);
      setIsProfileDropdownOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Run search whenever query changes (debounced)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim()) {
        navigate(
          `/allproducts?search=${encodeURIComponent(searchQuery.trim())}`
        );
      }
    }, 500); // 500ms delay

    

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, navigate]);


  // ✅ Sync input with query param whenever URL changes
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const query = params.get("search") || "";
      setSearchQuery(query);
      // ✅ re-focus input after redirect
  if (inputRef.current) {
    inputRef.current.focus();
  }
    }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedQuery = searchQuery.trim();

    if (trimmedQuery) {
      navigate(`/allproducts?search=${encodeURIComponent(trimmedQuery)}`, {
        state: { query: trimmedQuery }, // ✅ keep state
      });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Brand Logo & Text */}
          <div className="flex items-center space-x-3 flex-shrink-0 relative">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <Link to="/">
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    LUXE FASHION
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">
                    Premium Collection
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* search bar*/}
          <form
            onSubmit={handleSearch}
            className="relative lg:w-[900px] mx-auto"
          >
            <div className="md:flex flex-1 max-w-5xl mx-2">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                />
              </div>
            </div>
          </form>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist">
              <button className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-105">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </Link>

            {/* Shopping Cart */}
            <Link to="/cartsection">
              <button className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-105">
                <ShoppingCart className="w-5 h-5" />

                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cart.length}
                </span>
              </button>
            </Link>

            {/* Profile Section */}
            {customer ? (
              <div className="relative">
                <button
                  ref={profileButtonRef}
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-100 rounded-full transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden sm:block font-medium">
                    {customer.customer_name}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {customer.customer_name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {customer.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => navigate("/track-order")}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                      >
                        <Package className="w-5 h-5" />
                        <span>Track Order</span>
                      </button>

                      <button
                        onClick={() => navigate("/history")}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                      >
                        <Package className="w-5 h-5" />
                        <span>History</span>
                      </button>

                      <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600">
                        <Edit3 className="w-5 h-5" />
                        <span>Edit Profile</span>
                      </button>
                    </div>

                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
