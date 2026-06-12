import React from "react";
import {
  FaBrain,
  FaGem,
  FaOm,
  FaGlobeAsia
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered Analysis",
    description:
      "Leverage Gemini AI to generate personalized gemstone recommendations based on your birth details and life concerns."
  },

  {
    icon: <FaGlobeAsia />,
    title: "Vedic Astrology Engine",
    description:
      "Generate Moon Rashi, Nakshatra and Lagna using traditional Vedic astrology principles."
  },

  {
    icon: <FaGem />,
    title: "Gemstone Recommendations",
    description:
      "Receive gemstone suggestions along with metal, finger, mantra, best day and precautions."
  },

  {
    icon: <FaOm />,
    title: "Hindu Mythology Remedies",
    description:
      "Get remedies and spiritual guidance inspired by Sanatan Dharma and ancient Hindu scriptures."
  }
];

const FeaturesSection = () => {

  return (
    <section
      id="features"
      className="bg-blue-50 py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-700 mb-4">

            Powerful Features

          </h2>

          <p className="text-gray-600 text-lg">

            Combining Artificial Intelligence with Ancient Vedic Wisdom

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
                            bg-white
                            rounded-3xl
                            shadow-lg
                            p-8
                            hover:shadow-2xl
                            duration-300
                            border border-blue-100
                            "
            >

              <div className="
                            text-4xl
                            text-blue-600
                            mb-6
                            ">

                {feature.icon}

              </div>

              <h3 className="
                            text-2xl
                            font-bold
                            text-gray-800
                            mb-4
                            ">

                {feature.title}

              </h3>

              <p className="
                            text-gray-600
                            leading-7
                            ">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;