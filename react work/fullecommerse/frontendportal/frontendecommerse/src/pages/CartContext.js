import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const apiurl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("customerToken");

  const fetchCart = async () => {
    if (!token) {
      setCart([]); // reset when not logged in
      return;
    }
    try {
      const res = await axios.get(`${apiurl}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(
        res.data?.products.map((item) => ({
          ...item.product,
          cartItemId: `${item.product._id}-${item.size}-${item.color}`, // unique key
          size: item.size,
          color: item.color,
          quantity: item.quantity,
        })) || []
      );
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCart([]);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  const addToCart = async (
    productId,
    selectedSize,
    selectedColor,
    quantity
  ) => {
    if (!token) {
      window.location.href = "/login";
      return;
    }
    try {
      await axios.post(
        `${apiurl}/cart`,
        { productId, size: selectedSize, color: selectedColor, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart();
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const removeFromCart = async (productId) => {
    if (!token) return;
    try {
      await axios.delete(`${apiurl}/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  const clearCart = async () => {
    if (!token) {
      setCart([]);
      return;
    }
    try {
      await axios.delete(`${apiurl}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart([]); // reset frontend cart
    } catch (err) {
      console.error("Error clearing cart:", err);
      setCart([]); // still reset frontend in case backend fails
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
