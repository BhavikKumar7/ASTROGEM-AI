import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        isAuthenticated,
        user
    } = useSelector(
        state => state.auth
    );

    const role = user?.role;

    const handleLogout = async () => {

        await dispatch(
            logout()
        );

        navigate("/");

    };

    return (

        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-blue-100">

            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Left */}

                <Link
                    to="/"
                    className="flex items-center gap-3"
                >

                    <img
                        src="/logo.png"
                        alt="AstroGem AI"
                        className="h-16 w-16"
                    />

                    <div>

                        <h1 className="text-2xl font-bold text-blue-700">

                            AstroGem AI

                        </h1>

                        <p className="text-xs text-gray-500">

                            AI Powered Vedic Astrology

                        </p>

                    </div>

                </Link>


                {/* Middle */}

                <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

                    <a
                        href="#features"
                        className="hover:text-blue-600 transition"
                    >

                        Features

                    </a>

                    <a
                        href="#how-it-works"
                        className="hover:text-blue-600 transition"
                    >

                        How It Works

                    </a>

                    <a
                        href="#why-us"
                        className="hover:text-blue-600 transition"
                    >

                        Why AstroGem AI

                    </a>

                    <a
                        href="#faq"
                        className="hover:text-blue-600 transition"
                    >

                        FAQ

                    </a>

                </div>


                {/* Right */}

                {
                    !isAuthenticated ? (

                        <div className="flex items-center gap-4">

                            <Link
                                to="/login"
                                className="
                                text-blue-700
                                font-semibold
                                hover:text-blue-900
                                "
                            >

                                Login

                            </Link>

                            <Link
                                to="/signup"
                                className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-6
                                py-2.5
                                rounded-xl
                                font-semibold
                                shadow-lg
                                transition
                                "
                            >

                                Signup

                            </Link>

                        </div>

                    ) : (

                        <div className="flex items-center gap-4">

                            <Link
                                to={
                                    role === "ADMIN"
                                        ? "/admin"
                                        : "/dashboard"
                                }
                                className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-6
                                py-2.5
                                rounded-xl
                                font-semibold
                                shadow-lg
                                transition
                                "
                            >

                                Dashboard

                            </Link>

                            <button
                                onClick={
                                    handleLogout
                                }
                                className="
                                border
                                border-red-500
                                text-red-500
                                px-6
                                py-2.5
                                rounded-xl
                                font-semibold
                                hover:bg-red-500
                                hover:text-white
                                transition
                                "
                            >
                                Logout
                            </button>
                        </div>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;