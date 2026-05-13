// export default function FantaProducts() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background:
//           "linear-gradient(135deg, #FF8C00 0%, #FF6600 55%, #E85000 100%)",
//         fontFamily: "'Bebas Neue', sans-serif",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "60px 20px",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');

//         *{
//           margin:0;
//           padding:0;
//           box-sizing:border-box;
//         }

//         .card{
//           transition:0.4s ease;
//         }

//         .card:hover{
//           transform:translateY(-12px);
//         }
//       `}</style>

//       {/* PRODUCTS CONTAINER */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1200px",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
//           gap: "30px",
//           alignItems: "center",
//         }}
//       >
//         {/* CARD 1 */}
//         <div
//           className="card"
//           style={{
//             position: "relative",
//             background: "white",
//             borderRadius: "28px",
//             padding: "320px 24px 40px",
//             textAlign: "center",
//             overflow: "visible",
//             minHeight: "420px",
//           }}
//         >
//           <img
//             src="cocacola1.png"
//             alt="CocaCola"
//             style={{
//               width: "400px",
//               position: "absolute",
//               top: "-85px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               zIndex: 5,
//               filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
//             }}
//           />

//           <h2
//             style={{
//               fontSize: "48px",
//               color: "#111",
//               letterSpacing: "2px",
//               marginBottom: "10px",
//             }}
//           >
//             CocaCola
//           </h2>

//           <p
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               color: "#777",
//               fontSize: "15px",
//               marginBottom: "30px",
//             }}
//           >
//             Classic Original
//           </p>

//           <button
//             style={{
//               padding: "12px 34px",
//               border: "none",
//               borderRadius: "40px",
//               background: "#E8001A",
//               color: "white",
//               fontFamily: "'Poppins', sans-serif",
//               fontWeight: "600",
//               cursor: "pointer",
//               letterSpacing: "1px",
//             }}
//           >
//             Buy Now
//           </button>
//         </div>

//         {/* CARD 2 */}
//         <div
//           className="card"
//           style={{
//             position: "relative",
//             background: "white",
//             borderRadius: "28px",
//             padding: "320px 24px 40px",
//             textAlign: "center",
//             overflow: "visible",
//             minHeight: "420px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "48px",
//               color: "#111",
//               letterSpacing: "2px",
//               marginBottom: "10px",
//             }}
//           >
//             Fanta
//           </h2>

//           <p
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               color: "#777",
//               fontSize: "15px",
//               marginBottom: "30px",
//             }}
//           >
//             Orange Burst
//           </p>

//           <button
//             style={{
//               padding: "12px 34px",
//               border: "none",
//               borderRadius: "40px",
//               background: "#FF6600",
//               color: "white",
//               fontFamily: "'Poppins', sans-serif",
//               fontWeight: "600",
//               cursor: "pointer",
//               letterSpacing: "1px",
//             }}
//           >
//             Buy Now
//           </button>
//         </div>

//         {/* CARD 3 */}
//         <div
//           className="card"
//           style={{
//             position: "relative",
//             background: "white",
//             borderRadius: "28px",
//             padding: "320px 24px 40px",
//             textAlign: "center",
//             overflow: "visible",
//             minHeight: "420px",
//           }}
//         >
//           <img
//             src="pepsi1.png"
//             alt="Pepsi"
//             style={{
//               width: "430px",
//               position: "absolute",
//               top: "-4px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               zIndex: 5,
//               filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
//             }}
//           />

//           <h2
//             style={{
//               fontSize: "48px",
//               color: "#111",
//               letterSpacing: "2px",
//               marginBottom: "10px",
//             }}
//           >
//             Pepsi
//           </h2>

//           <p
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//               color: "#777",
//               fontSize: "15px",
//               marginBottom: "30px",
//             }}
//           >
//             Cool Blue
//           </p>

//           <button
//             style={{
//               padding: "12px 34px",
//               border: "none",
//               borderRadius: "40px",
//               background: "#004B93",
//               color: "white",
//               fontFamily: "'Poppins', sans-serif",
//               fontWeight: "600",
//               cursor: "pointer",
//               letterSpacing: "1px",
//             }}
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }