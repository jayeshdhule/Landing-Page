import React from "react";
import { Play } from "lucide-react";
import { galleryImages } from "../mock";

const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-[#1a0a3a]" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[#f5c98c] tracking-[0.25em] text-xs md:text-sm mb-4">GLIMPSE OF THE SHOW</p>
          <h2 id="gallery-heading" className="section-title text-3xl md:text-5xl gold-gradient-text">
            Moments from Past Editions
          </h2>
        </div>

        {/* Video showcase */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {["UEkcxtjPlm4", "7w2rfCexkhQ"].map((vid) => (
            <div key={vid} className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-xl group">
              <iframe
                title={`PSE video ${vid}`}
                src={`https://www.youtube.com/embed/${vid}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, 8).map((src, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0524]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
