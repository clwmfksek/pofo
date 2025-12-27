"use client";

import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-neutral-950/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          신효환
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-neutral-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="text-neutral-400 hover:text-white transition-colors">
            Experience
          </a>
          <a href="#awards" className="text-neutral-400 hover:text-white transition-colors">
            Awards
          </a>
          <a href="#skills" className="text-neutral-400 hover:text-white transition-colors">
            Skills
          </a>
        </div>

        <a
          href="mailto:clwmfksek@gmail.com"
          className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors flex items-center gap-2"
        >
          Contact
          <span>→</span>
        </a>
      </div>
    </nav>
  );
}
