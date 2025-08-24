import React from "react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
      {/* Phone Button */}
      {/* <a
        href="tel:+919478583103"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white shadow-lg animate-pulse"
      >
        <Phone className="w-6 h-6 transition-transform duration-300 hover:rotate-45" />
      </a> */}

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=919478583103&text=Hi TechMonarch need website development"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition-transform duration-300 text-3xl"
        
      >
        <i class="fa fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default FloatingButtons;
