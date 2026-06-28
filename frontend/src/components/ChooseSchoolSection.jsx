import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, MapPin, CalendarDays } from "lucide-react";
import { cityCards } from "../mock";

const ChooseSchoolSection = () => {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const goTo = (i) => {
    const len = cityCards.length;
    const idx = (i + len) % len;
    setActive(idx);
    if (trackRef.current) {
      const el = trackRef.current;
      const child = el.children[idx];
      if (child) el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
    }
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? goTo(active - 1) : goTo(active + 1));
    touchStartX.current = null;
  };

  return (
    <section id="cities" className="relative py-20 md:py-28 bg-[#0d0524]" aria-labelledby="choose-heading">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[#f5c98c] tracking-[0.25em] text-xs md:text-sm mb-4">CHOOSE THE SCHOOL</p>
          <h2 id="choose-heading" className="section-title text-3xl md:text-5xl gold-gradient-text leading-tight">
            Meet us in Cities Across the World to Choose the Right School
          </h2>
          <p className="text-white/70 mt-5 text-base md:text-lg leading-relaxed">
            Choosing a school for your child is one of the most crucial decisions a parent makes. AFAIRS Exhibitions hosts the Premier Schools Exhibition annually across India and abroad — a hub to interact with school representatives, explore curricula, and apply on-spot.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cityCards.map((c) => (
            <a key={c.id} href="#enquire" className="city-card group block" aria-label={`PSE ${c.name} event details`}>
              <div className="aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }} />
              <div className="overlay" />
              <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                <h3 className="text-white text-2xl font-semibold mb-2">{c.name}</h3>
                <div className="flex items-center gap-2 text-[#f5c98c] text-sm">
                  <CalendarDays size={14} /> {c.date}
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs mt-1">
                  <MapPin size={14} /> {c.venue}
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-white text-xs font-semibold tracking-widest opacity-0 group-hover:opacity-100 transition">
                  EXPLORE <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden mt-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div ref={trackRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
            {cityCards.map((c) => (
              <a key={c.id} href="#enquire" className="city-card shrink-0 w-[80%] snap-center">
                <div className="aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }} />
                <div className="overlay" />
                <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                  <h3 className="text-white text-2xl font-semibold mb-2">{c.name}</h3>
                  <div className="flex items-center gap-2 text-[#f5c98c] text-sm">
                    <CalendarDays size={14} /> {c.date}
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-xs mt-1">
                    <MapPin size={14} /> {c.venue}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-2" role="tablist" aria-label="City pagination">
            {cityCards.map((_, i) => (
              <button key={i} className={`dot ${i === active ? "active" : ""}`} aria-label={`Go to slide ${i + 1}`} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSchoolSection;
