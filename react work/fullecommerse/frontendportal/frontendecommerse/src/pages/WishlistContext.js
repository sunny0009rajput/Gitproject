import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const apiurl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("customerToken");

  // Fetch wishlist initially
  const fetchWishlist = async () => {
    if (!token) return;
    try {
      const res = await axios.get(`${apiurl}/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // ✅ response is { products: [...] }
      const products = res.data?.products || [];

      // save only product IDs in state
      setWishlist(products.map(item => item._id));
    } catch (err) {
      console.error("Error fetching wishlist:", err);
      setWishlist([]);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [token]);

  // Add to wishlist
  const addToWishlist = async (productId) => {
    if (!token) return;
    try {
      await axios.post(
        `${apiurl}/wishlist`,
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchWishlist(); // ✅ always refresh after add
      // setWishlist(prev =>
      //   prev.includes(productId) ? prev : [...prev, productId]
      // );
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = async (productId) => {
    if (!token) return;
    try {
      await axios.delete(`${apiurl}/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { productId },
      });
      await fetchWishlist();
     
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
