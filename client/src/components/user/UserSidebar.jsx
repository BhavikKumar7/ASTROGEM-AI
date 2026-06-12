import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    FaHome,
    FaUser,
    FaHistory,
    FaPlusCircle,
    FaSignOutAlt
} from "react-icons/fa";

import { logout } from "../../redux/authSlice";

const UserSidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (

        <div
            className="
            w-64
            bg-white
            shadow-lg
            h-screen
            p-6
            flex
            flex-col
            justify-between
            "
        >

            <div>

                <h1
                    className="
                    text-2xl
                    font-bold
                    text-blue-700
                    mb-10
                    "
                >
                    AstroGem AI
                </h1>

                <div className="space-y-4">

                    <Link
                        to="/dashboard"
                        className="
                        flex
                        items-center
                        gap-3
                        p-3
                        rounded-xl
                        hover:bg-blue-100
                        "
                    >
                        <FaHome />
                        Dashboard
                    </Link>

                    <Link
                        to="/profile"
                        className="
                        flex
                        items-center
                        gap-3
                        p-3
                        rounded-xl
                        hover:bg-blue-100
                        "
                    >
                        <FaUser />
                        Profile
                    </Link>

                    <Link
                        to="/new-recommendation"
                        className="
                        flex
                        items-center
                        gap-3
                        p-3
                        rounded-xl
                        hover:bg-blue-100
                        "
                    >
                        <FaPlusCircle />
                        New Recommendation
                    </Link>

                    <Link
                        to="/recommendation-history"
                        className="
                        flex
                        items-center
                        gap-3
                        p-3
                        rounded-xl
                        hover:bg-blue-100
                        "
                    >
                        <FaHistory />
                        History
                    </Link>

                </div>

            </div>


            {/* Logout Button */}

            <button
                onClick={handleLogout}
                className="
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                bg-red-500
                text-white
                hover:bg-red-600
                transition
                "
            >
                <FaSignOutAlt />
                Logout
            </button>

        </div>

    );
};

export default UserSidebar;