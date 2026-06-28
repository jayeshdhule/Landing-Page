import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="Premier Schools Exhibition home">
          <div className="bg-[#1a0a3a] text-[#f5c98c] font-bold rounded-md px-3 py-2 leading-none">
            <div className="text-[10px] tracking-[0.18em] font-semibold">PREMIER</div>
            <div className="text-[10px] tracking-[0.18em] font-semibold">SCHOOLS</div>
            <div className="text-[10px] tracking-[0.18em] font-semibold">EXHIBITION</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#1a0a3a]" aria-label="Primary">
          <a href="#about" className="hover:text-[#5b2aa6] transition-colors">About</a>
          <a href="#schools" className="hover:text-[#5b2aa6] transition-colors">Participating Schools</a>
          <a href="#cities" className="hover:text-[#5b2aa6] transition-colors">Cities</a>
          <a href="#why" className="hover:text-[#5b2aa6] transition-colors">Why Boarding</a>
          <a href="#gallery" className="hover:text-[#5b2aa6] transition-colors">Gallery</a>
        </nav>

        {/* Register button */}
        <a href="#enquire" className="btn-arrow hidden md:inline-flex" aria-label="Register now">
          <span className="arrow-box"><ArrowUpRight size={16} /></span>
          <span className="label-box">REGISTER NOW</span>
        </a>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-[#1a0a3a] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-3" role="menu">
          <a href="#about" className="block py-2 text-[#1a0a3a]" onClick={() => setOpen(false)}>About</a>
          <a href="#schools" className="block py-2 text-[#1a0a3a]" onClick={() => setOpen(false)}>Participating Schools</a>
          <a href="#cities" className="block py-2 text-[#1a0a3a]" onClick={() => setOpen(false)}>Cities</a>
          <a href="#why" className="block py-2 text-[#1a0a3a]" onClick={() => setOpen(false)}>Why Boarding</a>
          <a href="#gallery" className="block py-2 text-[#1a0a3a]" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#enquire" className="btn-arrow w-full justify-center" onClick={() => setOpen(false)}>
            <span className="arrow-box"><ArrowUpRight size={16} /></span>
            <span className="label-box">REGISTER NOW</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
