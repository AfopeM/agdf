"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Show button after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("NavBar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-4 bottom-4 z-30 rounded bg-white p-2 text-black shadow-lg transition-opacity ${
        isVisible
          ? "cursor-pointer opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <FiArrowUp size={20} />
    </button>
  );
}
