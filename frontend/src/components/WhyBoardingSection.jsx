import React from "react";
import { GraduationCap, Globe2, Users2, Sparkles } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Holistic Curriculum", text: "Boarding schools nurture both academics and life skills with structured routines." },
  { icon: Globe2, title: "Global Exposure", text: "Diverse student communities, exchange programs and international curricula." },
  { icon: Users2, title: "Lifelong Friendships", text: "Strong peer bonds and alumni networks that benefit your child for a lifetime." },
  { icon: Sparkles, title: "All-Round Development", text: "Sports, arts, leadership and pastoral care under one supportive roof." },
];

const WhyBoardingSection = () => {
  return (
    <section id="why" className="relative py-20 md:py-28 bg-[#1a0a3a]" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#f5c98c] tracking-[0.25em] text-xs md:text-sm mb-4">WHY BOARDING?</p>
          <h2 id="why-heading" className="section-title text-3xl md:text-5xl gold-gradient-text leading-tight">
            Why Choose a Boarding School?
          </h2>
          <p className="text-white/75 mt-5 text-base md:text-lg">
            Learn about the advantages of studying in a boarding school. PSE helps parents choose the right boarding school by considering geography, curriculum, campus, pastoral care, fees and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map(({ icon: Icon, title, text }, i) => (
            <div key={i} className="exh-card text-center">
              <div className="w-14 h-14 rounded-full bg-[#f5c98c]/15 border border-[#f5c98c]/40 flex items-center justify-center mx-auto mb-5">
                <Icon size={26} className="text-[#f5c98c]" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBoardingSection;
