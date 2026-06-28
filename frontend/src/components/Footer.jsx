import React from "react";
import { ArrowUpRight, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Final CTA */}
      <section className="relative py-20 md:py-28 bg-[#1a0a3a] overflow-hidden" aria-labelledby="join-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,201,140,0.18),transparent_70%)]" />
        <div className="mx-auto max-w-[1100px] px-5 md:px-10 text-center relative">
          <h2 id="join-heading" className="section-title text-3xl md:text-5xl gold-gradient-text leading-tight">
            Come join India's largest & most reputed schools' exhibition
          </h2>
          <p className="text-white/75 mt-5 text-base md:text-lg max-w-2xl mx-auto">
            Register today to attend the next Premier Schools Exhibition and discover the right school for your child.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#enquire" className="btn-arrow" aria-label="Register Now">
              <span className="arrow-box"><ArrowUpRight size={16} /></span>
              <span className="label-box">REGISTER NOW</span>
            </a>
            <a href="#faq" className="text-[#f5c98c] tracking-[0.18em] text-sm font-semibold border-b border-[#f5c98c]/50 pb-1">FAQ's</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0420] border-t border-white/5 pt-16 pb-8" role="contentinfo">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="bg-[#1a0a3a] text-[#f5c98c] font-bold rounded-md px-3 py-2 leading-none inline-block">
                <div className="text-[10px] tracking-[0.18em]">PREMIER</div>
                <div className="text-[10px] tracking-[0.18em]">SCHOOLS</div>
                <div className="text-[10px] tracking-[0.18em]">EXHIBITION</div>
              </div>
              <p className="text-white/60 text-sm mt-5 leading-relaxed">
                Asia's Largest Boarding Schools Exhibition. 22nd Edition spanning 17 cities worldwide.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#f5c98c] hover:border-[#f5c98c]/50 transition"><Facebook size={15} /></a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#f5c98c] hover:border-[#f5c98c]/50 transition"><Instagram size={15} /></a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#f5c98c] hover:border-[#f5c98c]/50 transition"><Youtube size={15} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest">EXPLORE</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#about" className="hover:text-[#f5c98c]">About PSE</a></li>
                <li><a href="#schools" className="hover:text-[#f5c98c]">Participating Schools</a></li>
                <li><a href="#cities" className="hover:text-[#f5c98c]">Cities</a></li>
                <li><a href="#why" className="hover:text-[#f5c98c]">Why Boarding</a></li>
                <li><a href="#gallery" className="hover:text-[#f5c98c]">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest">CITIES</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-[#f5c98c]">Gurugram</a></li>
                <li><a href="#" className="hover:text-[#f5c98c]">Noida</a></li>
                <li><a href="#" className="hover:text-[#f5c98c]">Mumbai</a></li>
                <li><a href="#" className="hover:text-[#f5c98c]">Bangalore</a></li>
                <li><a href="#" className="hover:text-[#f5c98c]">Dubai</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest">CONTACT</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2"><Phone size={14} className="mt-1 text-[#f5c98c]" /> +91 11 4567 8900</li>
                <li className="flex items-start gap-2"><Mail size={14} className="mt-1 text-[#f5c98c]" /> info@premierschoolsexhibition.com</li>
                <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-[#f5c98c]" /> AFAIRS Exhibitions, New Delhi, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/50 text-xs">
            <p>© 2025 AFAIRS Exhibitions & Media Pvt. Ltd. All rights reserved.</p>
            <p>Designed & built for the PSE 22nd Edition.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
