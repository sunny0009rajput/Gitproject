export default function FantaPage() {
  return (
    <>
    {/* FLOATING LAYER */}
      <img
        id="hero-can"
        src="fanta1.png"
        alt="Fanta Can"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          // transform: "translate(-50%, -50%)",
          width: "clamp(200px,22vw,280px)",
          objectFit: "contain",
          filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.35))",
          zIndex: 99999,
        }}
      />
      <img
          id="hero-orange-slice"
          src="orangecut1.png"
          alt="orange slice"
          style={{
            position: "absolute",
            top: "8%",
            left: "38%",
            width: 200,
            zIndex: 4,
            filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.2))",
          }}
        />
        <img
          id="hero-oranges"
          src="orange1.png"
          alt="oranges"
          style={{
            position: "absolute",
            bottom: "2%",
            right: "30%",
            width: 290,
            zIndex: 11,
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.25))",
          }}
        />


      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        .drink-card { transition: 0.4s ease; }
        .drink-card:hover { transform: translateY(-12px); }
      `}</style>

      {/* ══════════════════════════════════════
          NAVBAR  #navbar
      ══════════════════════════════════════ */}
      <nav
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 48px",
        }}
      >
        <span
          id="nav-logo"
          style={{
            color: "white",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 26,
            letterSpacing: 4,
          }}
        >
          LOGO
        </span>

        <ul
          id="nav-links"
          style={{
            display: "flex",
            gap: 40,
            listStyle: "none",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: 1,
          }}
        >
          {["Home", "Products", "Shop", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div
          id="nav-hamburger"
          style={{ display: "flex", flexDirection: "column", gap: 5, cursor: "pointer" }}
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              style={{ display: "block", width: 24, height: 2, background: "white", borderRadius: 2 }}
            />
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════
          SECTION 1 — HERO  #hero-section
      ══════════════════════════════════════ */}
      <section
        id="hero-section"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #FF8C00 0%, #FF6600 50%, #E85000 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontFamily: "'Bebas Neue', sans-serif",
        }}
      >
        {/* Big FANTA background text */}
        <span
          id="hero-fanta-text"
          style={{
            position: "absolute",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(180px, 32vw, 520px)",
            color: "white",
            lineHeight: 0.85,
            userSelect: "none",
            opacity: 0.95,
            letterSpacing: "25px",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          FANTA
        </span>

        {/* Leaf — top left */}
        <img
          id="hero-leaf"
          src="leaf2.png"
          alt="leaf"
          style={{
            position: "absolute",
            top: "8%",
            left: "4%",
            width: 150,
            zIndex: 5,
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))",
          }}
        />

        {/* Orange slice — top center */}
        

        {/* Fanta Can — center */}
        {/* <img
          id="hero-can"
          src="fanta1.png"
          alt="Fanta Can"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: "clamp(200px, 22vw, 280px)",
            objectFit: "contain",
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.35))",
          }}
        /> */}

        {/* Oranges — bottom center-right */}
        

        {/* Small leaf — bottom left */}
        <img
          id="hero-leaf-bottom"
          src="leaf2.png"
          alt="leaf"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "12%",
            width: 190,
            rotate: "-40deg",
            zIndex: 4,
            opacity: 0.9,
          }}
        />
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — BLOB  #blob-section
      ══════════════════════════════════════ */}
      <section
        id="blob-section"
        style={{
          minHeight: "100vh",
          background: "#33001a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 60,
            flexWrap: "wrap",
          }}
        >
          {/* Blob SVG */}
          <div id="blob-image" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 420, maxWidth: "100%" }}
            >
              <path
                fill="#FF0066"
                d="M55.4,-43.3C68.4,-27.8,73.3,-5,67.9,14.3C62.6,33.7,47,49.5,27.5,60.1C8,70.6,-15.5,75.8,-31.3,67.3C-47.1,58.9,-55.3,36.7,-60.9,13.5C-66.5,-9.7,-69.7,-33.9,-59.1,-48.8C-48.6,-63.7,-24.3,-69.3,-1.6,-68C21.2,-66.8,42.4,-58.7,55.4,-43.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          {/* Text content */}
          <div id="blob-content" style={{ flex: 1, color: "white" }}>
            <h1
              id="blob-title"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 64,
                marginBottom: 20,
                lineHeight: 1.1,
                letterSpacing: 2,
              }}
            >
              Creative Design
            </h1>

            <p
              id="blob-desc"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                maxWidth: 500,
                opacity: 0.9,
              }}
            >
              Build modern and beautiful user interfaces with smooth layouts,
              attractive visuals, and responsive design. Create experiences that
              look clean, professional, and engaging on every device.
            </p>

            <button
              id="blob-btn"
              style={{
                marginTop: 30,
                padding: "14px 32px",
                border: "none",
                borderRadius: 40,
                background: "white",
                color: "#ff2d2d",
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — PRODUCTS  #products-section
      ══════════════════════════════════════ */}
      <section
        id="products-section"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #FF8C00 0%, #FF6600 55%, #E85000 100%)",
          fontFamily: "'Bebas Neue', sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 20px 80px",
        }}
      >
        <div
          id="cards-grid"
          style={{
            width: "100%",
            maxWidth: 1200,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 30,
            alignItems: "center",
          }}
        >

          {/* ── Card 1: CocaCola  #card-cocacola ── */}
          <div
            id="card-cocacola"
            className="drink-card"
            style={{
              position: "relative",
              background: "white",
              borderRadius: 28,
              padding: "320px 24px 40px",
              textAlign: "center",
              overflow: "visible",
              minHeight: 420,
            }}
          >
            <img
              id="slice-cocacola"
              src="orangecut1.png"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -50,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                zIndex: 3,
                filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.18))",
              }}
            />
            <img
              id="can-cocacola"
              src="cocacola1.png"
              alt="CocaCola"
              style={{
                width: 400,
                position: "absolute",
                top: -85,
                left: "50%",
                // transform: "translateX(-50%)",
                zIndex: 5,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
              }}
            />
            <h2 style={{ fontSize: 48, color: "#111", letterSpacing: 2, marginBottom: 5 }}>
              CocaCola
            </h2>
            {/* <p style={{ fontFamily: "'Poppins',sans-serif", color: "#777", fontSize: 15, marginBottom: 10 }}>
              Classic Original
            </p> */}
            <button
              style={{
                padding: "12px 34px",
                border: "none",
                borderRadius: 40,
                background: "#E8001A",
                color: "white",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: 1,
              }}
            >
              Buy Now
            </button>
          </div>

          {/* ── Card 2: Fanta  #card-fanta ── */}
          <div
            id="card-fanta"
            className="drink-card"
            style={{
              position: "relative",
              background: "white",
              borderRadius: 28,
              padding: "320px 24px 40px",
              textAlign: "center",
              overflow: "visible",
              minHeight: 420,
            }}
          >
            <img
              id="slice-fanta"
              src="orangecut1.png"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -50,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                zIndex: 3,
                filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.18))",
              }}
            />
            {/* <img
              id="can-fanta"
              src="fanta1.png"
              alt="Fanta"
              style={{
                width: 400,
                position: "absolute",
                top: -85,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
              }}
            /> */}
            <h2 style={{ fontSize: 48, color: "#111", letterSpacing: 2, marginBottom: 5 }}>
              Fanta
            </h2>
            {/* <p style={{ fontFamily: "'Poppins',sans-serif", color: "#777", fontSize: 15, marginBottom: 10 }}>
              Orange Burst
            </p> */}
            <button
              style={{
                padding: "12px 34px",
                border: "none",
                borderRadius: 40,
                background: "#FF6600",
                color: "white",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: 1,
              }}
            >
              Buy Now
            </button>
          </div>

          {/* ── Card 3: Pepsi  #card-pepsi ── */}
          <div
            id="card-pepsi"
            className="drink-card"
            style={{
              position: "relative",
              background: "white",
              borderRadius: 28,
              padding: "320px 24px 40px",
              textAlign: "center",
              overflow: "visible",
              minHeight: 420,
            }}
          >
            <img
              id="slice-pepsi"
              src="orangecut1.png"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -50,
                left: "50%",
                // transform: "translateX(-50%)",
                width: 120,
                zIndex: 3,
                filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.18))",
              }}
            />
            <img
              id="can-pepsi"
              src="pepsi1.png"
              alt="Pepsi"
              style={{
                width: 430,
                position: "absolute",
                top: -40,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
              }}
            />
            <h2 style={{ fontSize: 48, color: "#111", letterSpacing: 2, marginBottom: 5 }}>
              Pepsi
            </h2>
            {/* <p style={{ fontFamily: "'Poppins',sans-serif", color: "#777", fontSize: 15, marginBottom: 10 }}>
              Cool Blue
            </p> */}
            <button
              style={{
                padding: "12px 34px",
                border: "none",
                borderRadius: 40,
                background: "#004B93",
                color: "white",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: 1,
              }}
            >
              Buy Now
            </button>
          </div>

        </div>
      </section>
    </>
  );
}