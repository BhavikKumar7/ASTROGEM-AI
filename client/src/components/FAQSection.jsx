import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
    {
        question: "What is AstroGem AI?",
        answer:
            "AstroGem AI is an AI-powered Vedic astrology platform that provides personalized gemstone recommendations based on Moon Rashi, Nakshatra, Lagna and Hindu mythology."
    },

    {
        question: "How are gemstone recommendations generated?",
        answer:
            "Recommendations are generated using Vedic astrology calculations and Gemini AI to analyze your birth chart and life concerns."
    },

    {
        question: "Do I need to enter my birth details every time?",
        answer:
            "No. Your birth details are securely saved during registration and are automatically used for future consultations."
    },

    {
        question: "Is this based on Western astrology?",
        answer:
            "No. AstroGem AI strictly follows Vedic astrology principles and Hindu mythology."
    },

    {
        question: "Can I view my previous consultations?",
        answer:
            "Yes. Every recommendation is saved in your history and can be viewed anytime from your dashboard."
    }
];

const FAQSection = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {

        setOpenIndex(
            openIndex === index
                ? null
                : index
        );

    };

    return (

        <section
            id="faq"
            className="bg-white py-24"
        >

            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-blue-700 mb-4">

                        Frequently Asked Questions

                    </h2>

                    <p className="text-gray-600 text-lg">

                        Everything you need to know about AstroGem AI

                    </p>

                </div>

                {/* FAQs */}

                <div className="space-y-6">

                    {
                        faqs.map((faq, index) => (

                            <div
                                key={index}
                                className="
                                bg-blue-50
                                border
                                border-blue-100
                                rounded-2xl
                                shadow-md
                                overflow-hidden
                                "
                            >

                                <button
                                    className="
                                    w-full
                                    px-8
                                    py-6
                                    flex
                                    justify-between
                                    items-center
                                    text-left
                                    "
                                    onClick={() => toggleFAQ(index)}
                                >

                                    <h3 className="
                                    text-xl
                                    font-semibold
                                    text-gray-800
                                    ">

                                        {faq.question}

                                    </h3>

                                    {
                                        openIndex === index
                                            ? (
                                                <FaChevronUp
                                                    className="text-blue-600"
                                                />
                                            )
                                            : (
                                                <FaChevronDown
                                                    className="text-blue-600"
                                                />
                                            )
                                    }

                                </button>

                                {
                                    openIndex === index && (

                                        <div className="
                                        px-8
                                        pb-6
                                        text-gray-600
                                        leading-7
                                        ">

                                            {faq.answer}

                                        </div>

                                    )
                                }

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );
};

export default FAQSection;