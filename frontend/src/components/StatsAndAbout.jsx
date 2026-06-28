import React from "react";
import { statsData } from "../mock";

const StatsAndAbout = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-gradient-to-b from-[#0d0524] to-[#1a0a3a]" aria-labelledby="about-heading">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {statsData.map((s, i) => (
            <div key={i} className="text-center lg:text-left p-6 border-l-2 border-[#f5c98c]/40">
              <div className="section-title text-4xl md:text-5xl gold-gradient-text mb-3">{s.number}</div>
              <p className="text-white/75 leading-relaxed text-sm md:text-base max-w-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl">
          <p className="text-[#f5c98c] tracking-[0.25em] text-xs md:text-sm mb-4">22nd EDITION</p>
          <h2 id="about-heading" className="section-title text-3xl md:text-5xl gold-gradient-text leading-tight">
            Premier Schools Exhibition
          </h2>
          <h3 className="text-white text-lg md:text-2xl mt-4 font-medium">
            Represents India's Finest Boarding Schools, International & Day Schools.
          </h3>
          <div className="mt-6 space-y-4 text-white/75 leading-relaxed text-base">
            <p>
              'Premier Schools Exhibition' is a unique exhibition on school admissions and guidance. It brings together India's legacy boarding schools and new-age international and day schools across all boards on a single platform to help parents choose the right school for their ward.
            </p>
            <p>
              The exhibition is in its 22nd consecutive year, spanning 10+ cities in India and many international locations including Thailand, UAE (Dubai & Abu Dhabi), Oman, Qatar, Nepal, and Sri Lanka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndAbout;
