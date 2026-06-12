import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#0B1026] text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-right">
          <h1 className="text-5xl font-bold mb-6">
            Discover Your Perfect Gemstone
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            AstroGem AI combines Vedic Astrology and Artificial Intelligence
            to provide personalized gemstone recommendations based on your
            birth details and life goals.
          </p>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center">
          <img
            src="/logo.png"
            alt="AstroGem AI Logo"
            className="w-100 h-100 object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.5)]"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">
            Powered by Vedic Astrology
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            Get accurate astrological insights, gemstone suggestions,
            benefits, precautions, and remedies designed to support
            career growth, relationships, wealth, and overall well-being.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
