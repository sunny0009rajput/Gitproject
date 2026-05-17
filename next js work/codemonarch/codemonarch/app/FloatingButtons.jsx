

import React from "react";
import Image from "next/image";

function FloatingButtons() {
  return (
    <div
      className="fixed 
                 bottom-4 right-4
                 md:bottom-14 md:right-4
                 flex flex-col gap-4 z-50"
    >
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=919478583103&text=Hi CodeMonarch need website development"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CodeMonarch on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={42}
          height={42}
          className="object-cover"
        />
      </a>
    </div>
  );
}

export default FloatingButtons;