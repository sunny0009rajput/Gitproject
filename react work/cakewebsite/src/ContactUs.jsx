const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Nunito:wght@400;500;600&display=swap');
  .font-dancing { font-family: 'Dancing Script', cursive; }
  .font-nunito { font-family: 'Nunito', sans-serif; }

  @keyframes floatLeaf {
    0%, 100% { transform: translateY(0px) rotate(-10deg); }
    50% { transform: translateY(-14px) rotate(10deg); }
  }
  .animate-leaf { animation: floatLeaf 3s ease-in-out infinite; }
  .animate-leaf2 { animation: floatLeaf 4s ease-in-out infinite 1s; }

  .icon-link:hover { opacity: 0.75; transform: scale(1.15); }
  .icon-link { transition: all 0.2s ease; display: inline-flex; }

  .map-frame {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
  }
`;

// Decorative SVG icons (cake slice, cupcake, strawberry)
const CakeSliceIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" opacity="0.55">
    <path d="M8 34 L22 10 L36 34 Z" stroke="#e05c7a" strokeWidth="2" fill="none"/>
    <path d="M8 34 Q22 28 36 34" stroke="#e05c7a" strokeWidth="2" fill="none"/>
    <circle cx="22" cy="9" r="3" fill="#e05c7a"/>
  </svg>
);

const CupcakeIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" opacity="0.55">
    <ellipse cx="22" cy="30" rx="12" ry="7" stroke="#e05c7a" strokeWidth="2" fill="none"/>
    <path d="M10 30 L12 38 L32 38 L34 30" stroke="#e05c7a" strokeWidth="2" fill="none"/>
    <path d="M14 30 Q22 16 30 30" stroke="#e05c7a" strokeWidth="2" fill="none"/>
    <circle cx="22" cy="18" r="3" fill="#e05c7a"/>
  </svg>
);

const StrawberryIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" opacity="0.55">
    <path d="M19 34 C19 34 6 24 6 15 C6 9 12 6 19 10 C26 6 32 9 32 15 C32 24 19 34 19 34Z" stroke="#e05c7a" strokeWidth="2" fill="none"/>
    <path d="M19 10 Q17 5 13 4" stroke="#e05c7a" strokeWidth="1.5" fill="none"/>
    <path d="M19 10 Q21 5 25 4" stroke="#e05c7a" strokeWidth="1.5" fill="none"/>
  </svg>
);

// Social icons
const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const MessengerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.963 3.131 3.26 5.887-3.26-6.559 6.963z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#4b1a2a">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#4b1a2a">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4b1a2a">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#e05c7a">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export default function DeliziaContact() {
  return (
    <>
      <style>{fontStyle}</style>

      {/* CONTACT SECTION */}
      <section
        className="font-nunito min-h-screen bg-[#f9c8d2] pt-40 w-full relative overflow-hidden py-14 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#4b1a2a" }}
      >
        {/* Decorative floating icons */}
        <div className="absolute top-10 left-[42%] hidden md:block animate-leaf">
          <CakeSliceIcon />
        </div>
        <div className="absolute top-8 right-12 hidden md:block animate-leaf2">
          <CupcakeIcon />
        </div>
        <div className="absolute bottom-12 right-16 hidden md:block animate-leaf">
          <StrawberryIcon />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT: Map */}
          <div className="map-frame w-full" style={{ height: "380px" }}>
            <iframe
  title="Delizia Location"
  src="https://www.google.com/maps?q=Delhi,India&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0, display: "block" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>

          {/* RIGHT: Contact info */}
          <div className="flex flex-col gap-8">
            <h2
              className="font-dancing text-white leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              Order Your<br />Custom Cake Now!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Location */}
              <div>
                <h4
                  className="font-dancing mb-2 flex items-center gap-1"
                  style={{ color: "#e05c7a", fontSize: "1.4rem" }}
                >
                  Location:
                </h4>
                <p className="text-white text-sm leading-relaxed opacity-90">
                  128th Street Avenue,<br />
                  Miraflores, Lima - Peru
                </p>
              </div>

              {/* Call Us */}
              <div>
                <h4
                  className="font-dancing mb-2"
                  style={{ color: "#e05c7a", fontSize: "1.4rem" }}
                >
                  Call Us:
                </h4>
                <p className="text-white text-sm leading-relaxed opacity-90">
                  +1234-9876-00<br />
                  +00987654321
                </p>
              </div>

              {/* Operational */}
              <div>
                <h4
                  className="font-dancing mb-2"
                  style={{ color: "#e05c7a", fontSize: "1.4rem" }}
                >
                  Operational:
                </h4>
                <p className="text-white text-sm leading-relaxed opacity-90">
                  Monday - Saturday: 9am - 8pm<br />
                  Sunday: 9am - 6pm
                </p>
              </div>

              {/* Messages */}
              <div>
                <h4
                  className="font-dancing mb-3"
                  style={{ color: "#e05c7a", fontSize: "1.4rem" }}
                >
                  Messages:
                </h4>
                <div className="flex items-center gap-3">
                  <a href="#" className="icon-link" aria-label="WhatsApp"
                    style={{ backgroundColor: "#25D366", borderRadius: "50%", padding: "7px" }}>
                    <WhatsAppIcon />
                  </a>
                  <a href="#" className="icon-link" aria-label="Messenger"
                    style={{ backgroundColor: "#0099FF", borderRadius: "50%", padding: "7px" }}>
                    <MessengerIcon />
                  </a>
                  <a href="#" className="icon-link" aria-label="Email"
                    style={{ backgroundColor: "#e05c7a", borderRadius: "50%", padding: "7px" }}>
                    <MailIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="font-nunito w-full px-6 md:px-12 lg:px-20 py-5"
        style={{ backgroundColor: "#f9c6cc" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <span
            className="font-dancing text-2xl"
            style={{ color: "#2b1414" }}
          >
            Delizia
          </span>

          {/* Copyright */}
          <p className="text-xs text-center" style={{ color: "#5a3030" }}>
            © All Rights Reserved By Bedimcode
          </p>

          {/* Floating leaf + socials */}
          <div className="flex items-center gap-4">
            <span className="animate-leaf2 hidden sm:inline-block">
              <svg width="22" height="22" viewBox="0 0 60 60" fill="none">
                <ellipse cx="30" cy="30" rx="12" ry="28" fill="#4CAF50" transform="rotate(-30 30 30)" />
                <ellipse cx="30" cy="30" rx="12" ry="28" fill="#81C784" opacity="0.6" transform="rotate(30 30 30)" />
                <line x1="30" y1="8" x2="30" y2="52" stroke="#2E7D32" strokeWidth="1.5" />
              </svg>
            </span>
            <a href="#" className="icon-link" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="icon-link" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="icon-link" aria-label="X / Twitter">
              <XIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}