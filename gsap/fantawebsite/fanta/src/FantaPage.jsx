// export default function FantaPage() {
//   return (
//     <div
//       className="fanta-section"
//       style={{
//         minHeight: "100vh",
//         background:
//           "linear-gradient(135deg, #FF8C00 0%, #FF6600 50%, #E85000 100%)",
//         fontFamily: "'Bebas Neue', sans-serif",
//         overflow: "visible",
//         position: "relative",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;600;700;900&display=swap');

//         *{
//           margin:0;
//           padding:0;
//           box-sizing:border-box;
//         }

//         body{
//           overflow-x:hidden;
//         }
//       `}</style>

//       {/* NAVBAR */}
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 100,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "18px 48px",
//         }}
//       >
//         {/* LOGO */}
//         <span
//           style={{
//             color: "white",
//             fontSize: 26,
//             letterSpacing: 4,
//           }}
//         >
//           LOGO
//         </span>

//         {/* MENU */}
//         <ul
//           style={{
//             display: "flex",
//             gap: 40,
//             listStyle: "none",
//             fontFamily: "'Poppins', sans-serif",
//             fontWeight: 600,
//             fontSize: 14,
//             letterSpacing: 1,
//           }}
//         >
//           {["Home", "Products", "Shop", "Contact"].map((item) => (
//             <li key={item}>
//               <a
//                 href="#"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   opacity: 0.9,
//                 }}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* HAMBURGER */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 5,
//             cursor: "pointer",
//           }}
//         >
//           {[1, 2, 3].map((i) => (
//             <span
//               key={i}
//               style={{
//                 display: "block",
//                 width: 24,
//                 height: 2,
//                 background: "white",
//                 borderRadius: 2,
//               }}
//             />
//           ))}
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section
//         style={{
//           position: "relative",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           overflow: "hidden",
//         }}
//       >
//         {/* BIG FANTA TEXT */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             pointerEvents: "none",
//             zIndex: 1,
//           }}
//         >
//           <span
//             className="fanta-text"
//             style={{
//               fontSize: "clamp(180px, 32vw, 520px)",
//               color: "white",
//               lineHeight: 0.85,
//               userSelect: "none",
//               opacity: 0.95,
//               letterSpacing: "25px",
//             }}
//           >
//             FANTA
//           </span>
//         </div>

//         {/* LEAF TOP LEFT */}
//         <img
//           className="fanta-leaf"
//           src="leaf2.png"
//           alt="leaf"
//           style={{
//             position: "absolute",
//             top: "8%",
//             left: "4%",
//             width: 150,
//             zIndex: 5,
//             filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))",
//           }}
//         />

//         {/* ORANGE SLICE */}
//         <img
//           src="orangecut1.png"
//           alt="orange slice"
//           style={{
//             position: "absolute",
//             top: "8%",
//             left: "38%",
//             width: 200,
//             zIndex: 4,
//             filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.2))",
//           }}
//         />

//         {/* PALM LEAF */}
//         {/* <img
//           src="palm.png"
//           alt="palm leaf"
//           style={{
//             position: "absolute",
//             top: "-4%",
//             right: "-2%",
//             width: 220,
//             zIndex: 5,
//             filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.15))",
//           }}
//         /> */}

//         {/* FANTA CAN CENTER */}
// <img
//   id="fanta"
//   src="fanta1.png"
//   alt="Fanta Can"
//   style={{
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 999,
//     width: "clamp(200px,22vw,280px)",
//     objectFit: "contain",
//   }}
// />

//         {/* ORANGES BOTTOM RIGHT */}
//         <img
//           className="fanta-oranges"
//           src="orange1.png"
//           alt="oranges"
//           style={{
//             position: "absolute",
//             bottom: "2%",
//             right: "30%",
//             width: 290,
//             zIndex: 11,
//             filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.25))",
//           }}
//         />

//         {/* SMALL LEAF BOTTOM */}
//         <img
//           src="leaf2.png"
//           alt="leaf"
//           style={{
//             position: "absolute",
//             bottom: "10%",
//             left: "12%",
//             width: 190,
//             rotate: "-40deg",
//             zIndex: 4,
//             opacity: 0.9,
//           }}
//         />
//       </section>
//     </div>
//   );
// }