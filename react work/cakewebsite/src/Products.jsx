import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Nunito:wght@400;500;600;700&display=swap');
`;

const categories = ["Strawberry", "Vanilla", "Chocolate", "Dried fruit", "Others"];

const allProducts = [
  // Strawberry
  {
    id: 1,
    name: "Strawberry Shortcake",
    price: "$15.99",
    category: "Strawberry",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
  },
  {
    id: 2,
    name: "Fresh Strawberry Cream",
    price: "$15.99",
    category: "Strawberry",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  },
  {
    id: 3,
    name: "Strawberry Delight Cake",
    price: "$15.99",
    category: "Strawberry",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80",
  },
  // Vanilla
  {
    id: 4,
    name: "Classic Vanilla Dream",
    price: "$14.99",
    category: "Vanilla",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&q=80",
  },
  {
    id: 5,
    name: "Vanilla Bean Layer",
    price: "$16.99",
    category: "Vanilla",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80",
  },
  {
    id: 6,
    name: "French Vanilla Gateau",
    price: "$18.99",
    category: "Vanilla",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&q=80",
  },
  // Chocolate
  {
    id: 7,
    name: "Dark Chocolate Truffle",
    price: "$17.99",
    category: "Chocolate",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
  },
  {
    id: 8,
    name: "Chocolate Fudge Layer",
    price: "$16.99",
    category: "Chocolate",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&q=80",
  },
  {
    id: 9,
    name: "Molten Choco Cake",
    price: "$15.99",
    category: "Chocolate",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&q=80",
  },
  // Dried fruit
  {
    id: 10,
    name: "Fig & Walnut Cake",
    price: "$19.99",
    category: "Dried fruit",
    image: "https://images.unsplash.com/photo-1535141192574-5f8ec2c9df64?w=500&q=80",
  },
  {
    id: 11,
    name: "Date & Almond Torte",
    price: "$18.99",
    category: "Dried fruit",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80",
  },
  {
    id: 12,
    name: "Cranberry Loaf Cake",
    price: "$14.99",
    category: "Dried fruit",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80",
  },
  // Others
  {
    id: 13,
    name: "Blueberry Drip Cake",
    price: "$16.99",
    category: "Others",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80",
  },
  {
    id: 14,
    name: "Lemon Zest Cake",
    price: "$13.99",
    category: "Others",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&q=80",
  },
  {
    id: 15,
    name: "Matcha Mousse Cake",
    price: "$17.99",
    category: "Others",
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=500&q=80",
  },
];

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.82 5H21l-1.68 8.39c-.16.8-.87 1.41-1.69 1.61H8.42c-.82-.1-1.49-.72-1.64-1.53L5.1 3H2V1H6.27l.55 4z"/>
  </svg>
);

export default function Products() {
  const [active, setActive] = useState("Strawberry");
  const filtered = allProducts.filter((p) => p.category === active);

  return (
    <>
      <style>{fontStyle}</style>
      <section
        style={{ backgroundColor: "#f9c6cc", fontFamily: "'Nunito', sans-serif" }}
        className="min-h-screen w-full px-6 md:px-14 lg:px-20 py-14"
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            color: "#2b1414",
            fontWeight: 700,
          }}
        >
          Our Products
        </motion.h1>

        {/* FILTER PILLS */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Nunito', sans-serif",
                backgroundColor: active === cat ? "#d45a72" : "white",
                color: active === cat ? "white" : "#2b1414",
                border: "none",
                borderRadius: "999px",
                padding: "10px 24px",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: active === cat
                  ? "0 4px 15px rgba(212,90,114,0.4)"
                  : "0 2px 8px rgba(0,0,0,0.08)",
                transform: active === cat ? "scale(1.05)" : "scale(1)",
                transition: "all 0.25s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: "#fdf0f2",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(180,80,100,0.12)",
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 40px rgba(180,80,100,0.22)",
                }}
              >
                {/* Dark blob top section with image */}
                <div
                  style={{
                    backgroundColor: "#4b1a2a",
                    borderRadius: "0 0 60% 60% / 0 0 40% 40%",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "0",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {/* Cart button */}
                  <button
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      backgroundColor: "#d45a72",
                      border: "none",
                      borderRadius: "10px",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(212,90,114,0.4)",
                      transition: "transform 0.2s ease",
                      zIndex: 10,
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    aria-label="Add to cart"
                  >
                    <CartIcon />
                  </button>

                  {/* Cake image — overlaps the blob bottom edge */}
                  <div
                    style={{
                      width: "200px",
                      height: "180px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      marginBottom: "-30px",
                      boxShadow: "0 12px 35px rgba(0,0,0,0.3)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "44px 20px 28px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "1.35rem",
                      color: "#2b1414",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#d45a72",
                    }}
                  >
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}