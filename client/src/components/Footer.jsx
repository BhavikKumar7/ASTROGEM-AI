import React from "react";
import { Link } from "react-router-dom";
import {
    FaGithub,
    FaEnvelope,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {

    return (

        <footer className="bg-blue-700 text-white">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-4 mb-5">

                            <img
                                src="/logo.png"
                                alt="AstroGem AI"
                                className="w-16 h-16 object-contain"
                            />

                            <div>

                                <h2 className="text-3xl font-bold">

                                    AstroGem AI

                                </h2>

                                <p className="text-blue-100">

                                    AI Powered Vedic Astrology

                                </p>

                            </div>

                        </div>

                        <p className="text-blue-100 leading-7">

                            AstroGem AI combines Ancient Vedic Astrology with
                            Modern AI to provide personalized gemstone
                            recommendations and remedies.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">

                            Quick Links

                        </h3>

                        <div className="space-y-3 text-blue-100">

                            <Link
                                to="/"
                                className="block hover:text-white"
                            >
                                Home
                            </Link>

                            <Link
                                to="/login"
                                className="block hover:text-white"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="block hover:text-white"
                            >
                                Signup
                            </Link>

                        </div>

                    </div>

                    {/* Features */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">

                            Features

                        </h3>

                        <div className="space-y-3 text-blue-100">

                            <p>AI Recommendations</p>

                            <p>Vedic Astrology</p>

                            <p>Gemstone Therapy</p>

                            <p>Consultation History</p>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">

                            Connect

                        </h3>

                        <div className="space-y-5">

                            <div className="flex items-center gap-3">

                                <FaEnvelope />

                                <span>
                                    support@astrogemai.com
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FaGithub />

                                <span>
                                    github.com/yourusername
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FaLinkedin />

                                <span>
                                    linkedin.com/in/yourprofile
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-blue-500 mt-14 pt-8 text-center text-blue-100">

                    © {new Date().getFullYear()} AstroGem AI.
                    All Rights Reserved.

                </div>

            </div>

        </footer>

    );

};

export default Footer;