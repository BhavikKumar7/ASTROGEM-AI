import React from "react";
import {
    FaUserPlus,
    FaBirthdayCake,
    FaCommentDots,
    FaGem
} from "react-icons/fa";

const steps = [
    {
        icon: <FaUserPlus />,
        title: "Create Account",
        description:
            "Sign up and securely create your AstroGem AI account."
    },

    {
        icon: <FaBirthdayCake />,
        title: "Enter Birth Details",
        description:
            "Provide your birth date, time and place for accurate Vedic calculations."
    },

    {
        icon: <FaCommentDots />,
        title: "Describe Your Problem",
        description:
            "Tell us about your concerns related to career, health, finance or relationships."
    },

    {
        icon: <FaGem />,
        title: "Receive Recommendations",
        description:
            "Get personalized gemstone suggestions, remedies and mantras powered by AI and Vedic astrology."
    }
];

const Howitworks = () => {
    return (
        <section
            id="how-it-works"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-blue-700 mb-4">
                        How It Works
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Get your personalized gemstone recommendations in four simple steps.
                    </p>

                </div>

                {/* Steps */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {
                        steps.map((step, index) => (

                            <div
                                key={index}
                                className="
                                relative
                                bg-blue-50
                                border border-blue-100
                                rounded-3xl
                                p-8
                                shadow-lg
                                hover:shadow-2xl
                                duration-300
                                "
                            >

                                {/* Step Number */}

                                <div className="
                                absolute
                                -top-5
                                left-6
                                bg-blue-600
                                text-white
                                w-10
                                h-10
                                rounded-full
                                flex
                                items-center
                                justify-center
                                font-bold
                                shadow-lg
                                ">

                                    {index + 1}

                                </div>

                                {/* Icon */}

                                <div className="
                                text-5xl
                                text-blue-600
                                mb-6
                                mt-4
                                ">

                                    {step.icon}

                                </div>

                                {/* Title */}

                                <h3 className="
                                text-2xl
                                font-bold
                                text-gray-800
                                mb-4
                                ">

                                    {step.title}

                                </h3>

                                {/* Description */}

                                <p className="
                                text-gray-600
                                leading-7
                                ">

                                    {step.description}

                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>
        </section>
    );
};

export default Howitworks;