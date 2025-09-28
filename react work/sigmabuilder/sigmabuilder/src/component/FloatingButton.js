import React from "react";

function FloatingButtons() {
  return (
    <div
      className="fixed 
                 bottom-4 right-4   /* mobile margin */
                 md:bottom-14 md:right-4 /* desktop margin */
                 flex flex-col gap-4 z-50"
    >
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CodeMonarch on WhatsApp"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition-transform duration-300 text-3xl"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default FloatingButtons;
