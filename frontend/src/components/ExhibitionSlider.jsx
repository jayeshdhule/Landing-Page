import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { exhibitionHighlights } from "../mock";

const CARD_GAP = 24;

const ExhibitionSlider = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const total = exhibitionHighlights.length;

  const scrollToCard = (i) => {
    const idx = (i + total) % total;
    setActive(idx);
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[idx];
    if (child) el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => scrollToCard(active + 1), 5500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? scrollToCard(active - 1) : scrollToCard(active + 1));
    touchStartX.current = null;
  };

  return (
    <section
      id="exhibition"
      className="relative py-20 md:py-28 bg-[#0d0524]"
      aria-labelledby="exhibition-heading"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-[#f5c98c] tracking-[0.25em] text-xs md:text-sm mb-4">EXHIBITION HIGHLIGHTS</p>
            <h2 id="exhibition-heading" className="section-title text-3xl md:text-5xl gold-gradient-text leading-tight">
              Discover Schools that Prepare your Children for a Global Future
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollToCard(active - 1)} aria-label="Previous highlight" className="w-11 h-11 rounded-full border border-white/25 text-white hover:bg-white/10 transition flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollToCard(active + 1)} aria-label="Next highlight" className="w-11 h-11 rounded-full border border-white/25 text-white hover:bg-white/10 transition flex items-center justify-center">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 md:px-10 pb-2"
        style={{ scrollPaddingLeft: 16 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        tabIndex={0}
        aria-live="polite"
      >
        {exhibitionHighlights.map((h, i) => (
          <article
            key={h.id}
            className="exh-card shrink-0 snap-start w-[88%] sm:w-[55%] md:w-[40%] lg:w-[30%] xl:w-[24%] min-h-[320px] flex flex-col"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
          >
            <div className="w-16 h-16 rounded-full bg-white/8 border border-[#f5c98c]/40 flex items-center justify-center mb-5 overflow-hidden">
              <img src={h.icon} alt="" loading="lazy" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3 leading-snug">{h.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed flex-1">{h.description}</p>
            <div className="mt-6 text-[#f5c98c] text-xs tracking-[0.25em] font-semibold">0{i + 1} / 0{total}</div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Exhibition pagination">
        {exhibitionHighlights.map((_, i) => (
          <button key={i} className={`dot ${i === active ? "active" : ""}`} aria-label={`Go to highlight ${i + 1}`} onClick={() => scrollToCard(i)} />
        ))}
      </div>
    </section>
  );
};

export default ExhibitionSlider;
