"use client";

import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [language, setLanguage] = useState("en");

  // Load saved language on first render
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    setLanguage(savedLang);
  }, []);

  // Load Google script once
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    document.body.appendChild(addScript);
  }, []);

  // Apply translation when language changes
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = language;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [language]);

  const changeLanguage = (lang) => {
    localStorage.setItem("selectedLanguage", lang);
    setLanguage(lang);

    // Optional full refresh for clean state
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Hidden Google Element */}
      <div id="google_translate_element" className="hidden" />

      {/* Custom Toggle */}
      <div className="relative flex bg-zinc-800 rounded-full p-1 w-44 shadow-lg border border-zinc-700">
        {/* Sliding Background */}
        <div
          className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-orange-500 transition-all duration-300 ${
            language === "en" ? "left-1" : "left-1/2"
          }`}
        />

        {/* English Button */}
        <button
          onClick={() => changeLanguage("en")}
          className={`relative z-10 w-1/2 text-sm font-semibold transition ${
            language === "en" ? "text-white" : "text-gray-400"
          }`}
        >
          English
        </button>

        {/* Hindi Button */}
        <button
          onClick={() => changeLanguage("hi")}
          className={`relative z-10 w-1/2 text-sm font-semibold transition ${
            language === "hi" ? "text-white" : "text-gray-400"
          }`}
        >
          हिंदी
        </button>
      </div>
    </div>
  );
}