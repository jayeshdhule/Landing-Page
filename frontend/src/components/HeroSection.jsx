import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { heroSlides } from "../mock";

const HeroSection = () => {
  const [activeH, setActiveH] = useState(0); // horizontal slide
  const [activeV, setActiveV] = useState(0); // vertical detail variant (0,1)
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Auto play horizontal
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveH((p) => (p + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  // Auto rotate vertical variant for dual-axis effect
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveV((p) => (p + 1) % 2), 3500);
    return () => clearInterval(t);
  }, [paused]);

  const goPrev = () => setActiveH((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  const goNext = () => setActiveH((p) => (p + 1) % heroSlides.length);
  const goUp = () => setActiveV((p) => (p - 1 + 2) % 2);
  const goDown = () => setActiveV((p) => (p + 1) % 2);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx > 0 ? goPrev() : goNext();
    } else if (Math.abs(dy) > 40) {
      dy > 0 ? goUp() : goDown();
    }
    touchStartX.current = null; touchStartY.current = null;
  };

  const slide = heroSlides[activeH];

  const [form, setForm] = useState({ name: "", phone: "", grade: "" });
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    try { localStorage.setItem("pse_enquiry", JSON.stringify({ ...form, ts: Date.now() })); } catch (e) {}
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", grade: "" });
  };

  return (
    <section
      id="hero"
      className="hero-bg relative overflow-hidden pt-[72px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Premier Schools Exhibition upcoming events"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,201,140,0.18),transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,60,200,0.35),transparent_70%)]" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-10 grid lg:grid-cols-[1.3fr,1fr] gap-12 pt-12 md:pt-20 pb-24 md:pb-32 min-h-[calc(100vh-72px)] items-center relative z-10">
        {/* Left content - horizontal slide */}
        <div className="relative" aria-live="polite">
          <div key={slide.id} className="animate-[fadeIn_0.6s_ease]">
            <h1 className="section-title text-[42px] md:text-[64px] lg:text-[72px] leading-[1.05] gold-gradient-text">
              {slide.title}
            </h1>
            <h2 className="section-title text-[42px] md:text-[64px] lg:text-[72px] leading-[1.05] gold-gradient-text mt-1">
              {slide.titleHighlight}
            </h2>
            <p className="mt-4 text-white/85 tracking-[0.22em] text-sm md:text-base font-medium">
              {slide.subtitle}
            </p>

            {/* Dual-axis vertical variant under subtitle */}
            <div className="mt-10 relative overflow-hidden h-[110px] md:h-[120px]">
              <div
                className="transition-transform duration-700 ease-out"
                style={{ transform: `translateY(-${activeV * 110}px)` }}
              >
                {/* Variant A: venue pill */}
                <div className="h-[110px] md:h-[120px] flex items-center">
                  <div className="venue-pill">
                    <div>
                      <div className="font-bold text-[18px] md:text-[22px] leading-tight">{slide.venue}</div>
                      <div className="text-[12px] md:text-[14px] opacity-80">{slide.venueLine}</div>
                    </div>
                    <div className="venue-divider" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-[18px] md:text-[22px] leading-tight">{slide.dates}</div>
                      <div className="text-[12px] md:text-[14px] opacity-80">{slide.timing}</div>
                    </div>
                  </div>
                </div>
                {/* Variant B: highlight text */}
                <div className="h-[110px] md:h-[120px] flex items-start">
                  <div className="max-w-[520px]">
                    <p className="text-white/95 text-[15px] md:text-[17px] leading-relaxed">
                      Meet <span className="gold-text font-semibold">500+ top schools</span> across India and abroad. Interact directly with principals, get on-spot admissions and scholarships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider controls */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={i === activeH}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`dot ${i === activeH ? "active" : ""}`}
                    onClick={() => setActiveH(i)}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={goPrev} aria-label="Previous slide" className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white/10 transition flex items-center justify-center">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={goNext} aria-label="Next slide" className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white/10 transition flex items-center justify-center">
                  <ChevronRight size={18} />
                </button>
                <span className="w-px h-6 bg-white/20 mx-2" aria-hidden="true" />
                <button onClick={goUp} aria-label="Previous detail" className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white/10 transition flex items-center justify-center">
                  <ChevronUp size={18} />
                </button>
                <button onClick={goDown} aria-label="Next detail" className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white/10 transition flex items-center justify-center">
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Enquire Now form */}
        <aside id="enquire" aria-label="Enquire now form" className="bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          <h3 className="section-title text-white text-2xl md:text-3xl font-semibold">Enquire Now</h3>
          <p className="text-white/70 text-sm mt-1">Fill the form to get exclusive event invite & updates.</p>
          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <label className="block">
              <span className="sr-only">Parent's Name</span>
              <input
                className="enquire-input"
                type="text"
                placeholder="Parent's Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>
            <label className="block">
              <span className="sr-only">Phone number</span>
              <input
                className="enquire-input"
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </label>
            <label className="block">
              <span className="sr-only">Grade looking for</span>
              <textarea
                className="enquire-input resize-none"
                rows={3}
                placeholder="Which grade are you looking for?"
                value={form.grade}
                onChange={(e) => setForm({ ...form, grade: e.target.value })}
              />
            </label>
            <button type="submit" className="btn-arrow w-full justify-start mt-2" aria-label="Submit enquiry">
              <span className="arrow-box"><ArrowUpRight size={16} /></span>
              <span className="label-box flex-1 justify-center">SUBMIT</span>
            </button>
            {submitted && (
              <p role="status" className="text-[#f5c98c] text-sm pt-2">Thanks! We'll reach out shortly.</p>
            )}
          </form>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
