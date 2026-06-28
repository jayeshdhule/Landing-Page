import React from "react";
import { ClipboardList, Mail, QrCode, PartyPopper, ArrowRight } from "lucide-react";
import { empowerCards } from "../mock";

const steps = [
  { icon: ClipboardList, label: "Submit your", label2: "registration form" },
  { icon: Mail, label: "Receive your Unique", label2: "ID over email" },
  { icon: QrCode, label: "Enter the Expo with", label2: "your Unique ID" },
  { icon: PartyPopper, label: "See you", label2: "there!" },
];

const EmpowerAndSteps = () => {
  return (
    <>
      {/* Empower cards */}
      <section className="relative py-20 md:py-28 bg-[#0d0524]" aria-labelledby="empower-heading">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-[#f5c98c] tracking-[0.25em] text-xs md:text-sm mb-4">EMPOWER PARENTS</p>
            <h2 id="empower-heading" className="section-title text-3xl md:text-5xl gold-gradient-text leading-tight">
              Premier Schools Exhibition empowers parents to choose the right school
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {empowerCards.map((c) => (
              <div key={c.id} className="exh-card">
                <div className="w-12 h-12 rounded-full bg-[#f5c98c]/15 border border-[#f5c98c]/30 flex items-center justify-center mb-4 overflow-hidden">
                  <img src={c.icon} alt="" loading="lazy" className="w-8 h-8 object-contain" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps to attend */}
      <section id="steps" className="relative py-20 md:py-28 bg-gradient-to-b from-[#0d0524] to-[#1a0a3a]" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-[#f5c98c] tracking-[0.25em] text-xs md:text-sm mb-4">STEPS TO ATTEND</p>
            <h2 id="steps-heading" className="section-title text-3xl md:text-5xl gold-gradient-text">
              How to Join the Exhibition
            </h2>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map(({ icon: Icon, label, label2 }, i) => (
              <li key={i} className="relative text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f5c98c] to-[#d8a76a] flex items-center justify-center mx-auto shadow-2xl">
                  <Icon size={36} className="text-[#1a0a3a]" />
                </div>
                <p className="text-white mt-5 leading-snug">
                  {label}<br />
                  <span className="font-semibold">{label2}</span>
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight size={28} className="hidden lg:block absolute top-10 -right-4 text-[#f5c98c]/60" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default EmpowerAndSteps;
