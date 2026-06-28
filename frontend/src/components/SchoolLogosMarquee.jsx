import React from "react";
import { schoolLogos } from "../mock";

const Row = ({ logos, reverse }) => (
  <div className="marquee-container overflow-hidden py-4" tabIndex={0} aria-label="Participating schools logos">
    <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
      {[...logos, ...logos].map((src, idx) => (
        <div
          key={`${src}-${idx}`}
          className="shrink-0 mx-6 flex items-center justify-center h-[80px] w-[150px] bg-white rounded-lg p-3 shadow-md"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

const SchoolLogosMarquee = () => {
  const half = Math.ceil(schoolLogos.length / 2);
  const rowA = schoolLogos.slice(0, half);
  const rowB = schoolLogos.slice(half);

  return (
    <section id="schools" className="relative py-14 md:py-20 bg-[#0d0524]" aria-labelledby="schools-heading">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="text-center mb-10">
          <h2 id="schools-heading" className="section-title text-3xl md:text-5xl gold-gradient-text">
            Participating Schools
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            India's finest boarding schools, legacy institutions, and new-age international schools — all under one roof.
          </p>
        </div>
      </div>
      <Row logos={rowA} reverse={false} />
      <Row logos={rowB} reverse={true} />
    </section>
  );
};

export default SchoolLogosMarquee;
