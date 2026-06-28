import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SchoolLogosMarquee from "../components/SchoolLogosMarquee";
import StatsAndAbout from "../components/StatsAndAbout";
import ChooseSchoolSection from "../components/ChooseSchoolSection";
import WhyBoardingSection from "../components/WhyBoardingSection";
import ExhibitionSlider from "../components/ExhibitionSlider";
import GallerySection from "../components/GallerySection";
import EmpowerAndSteps from "../components/EmpowerAndSteps";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-[#0d0524] min-h-screen text-white">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main">
        <HeroSection />
        <SchoolLogosMarquee />
        <StatsAndAbout />
        <ChooseSchoolSection />
        <WhyBoardingSection />
        <ExhibitionSlider />
        <GallerySection />
        <EmpowerAndSteps />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
