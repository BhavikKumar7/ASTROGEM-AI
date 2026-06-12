import React from "react";
import {
    FaCheckCircle,
    FaRobot,
    FaGem,
    FaMoon,
    FaShieldAlt
} from "react-icons/fa";

const reasons = [
    {
        icon: <FaRobot />,
        title: "AI-Powered Insights",
        description:
            "Advanced AI analyzes your birth details and life concerns to provide personalized recommendations."
    },

    {
        icon: <FaMoon />,
        title: "Vedic Astrology Based",
        description:
            "Recommendations are generated using Moon Rashi, Nakshatra and Lagna according to traditional Vedic astrology."
    },

    {
        icon: <FaGem />,
        title: "Personalized Remedies",
        description:
            "Receive gemstone suggestions, mantras, best days and precautions tailored to your chart."
    },

    {
        icon: <FaShieldAlt />,
        title: "Secure & Reliable",
        description:
            "Your information is securely stored and used only for astrological analysis."
    }
];

const WhyAstroGem = () => {
    return (
        <section className="py-24 bg-blue-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left */}

                    <div>

                        <h2 className="text-5xl font-bold text-blue-700 mb-6">

                            Why Choose AstroGem AI?

                        </h2>

                        <p className="text-gray-600 text-lg leading-8 mb-10">

                            AstroGem AI combines ancient Vedic astrology with modern AI
                            to deliver meaningful gemstone recommendations and spiritual remedies.

                        </p>

                        <div className="space-y-6">

                            <div className="flex items-center gap-4">

                                <FaCheckCircle className="text-green-500 text-2xl" />

                                <p className="text-gray-700 text-lg">
                                    Accurate Moon Rashi & Nakshatra Analysis
                                </p>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaCheckCircle className="text-green-500 text-2xl" />

                                <p className="text-gray-700 text-lg">
                                    Hindu Mythology Inspired Remedies
                                </p>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaCheckCircle className="text-green-500 text-2xl" />

                                <p className="text-gray-700 text-lg">
                                    Personalized AI Recommendations
                                </p>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaCheckCircle className="text-green-500 text-2xl" />

                                <p className="text-gray-700 text-lg">
                                    Secure User Data & Consultation History
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="grid sm:grid-cols-2 gap-6">

                        {
                            reasons.map((reason, index) => (

                                <div
                                    key={index}
                                    className="
                                    bg-white
                                    p-8
                                    rounded-3xl
                                    shadow-lg
                                    border border-blue-100
                                    hover:shadow-2xl
                                    duration-300
                                    "
                                >

                                    <div className="text-4xl text-blue-600 mb-5">

                                        {reason.icon}

                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">

                                        {reason.title}

                                    </h3>

                                    <p className="text-gray-600 leading-7">

                                        {reason.description}

                                    </p>

                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyAstroGem;