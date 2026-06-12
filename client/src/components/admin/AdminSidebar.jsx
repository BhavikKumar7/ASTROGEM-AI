import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaSignOutAlt
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const AdminSidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {

        await dispatch(logout());

        navigate("/");

    };

    return (

        <div className="
        w-64
        bg-white
        shadow-lg
        h-screen
        p-6
        flex
        flex-col
        justify-between
        ">

            {/* Top */}

            <div>

                <h1 className="
                text-3xl
                font-bold
                text-blue-700
                mb-10
                ">
                    Admin Panel
                </h1>

                <div className="
                flex
                flex-col
                gap-5
                ">

                    <Link
                        to="/admin"
                        className="
                        flex
                        items-center
                        gap-3
                        text-gray-700
                        hover:text-blue-700
                        font-medium
                        "
                    >
                        <FaHome />
                        Dashboard
                    </Link>

                    <Link
                        to="/admin/users"
                        className="
                        flex
                        items-center
                        gap-3
                        text-gray-700
                        hover:text-blue-700
                        font-medium
                        "
                    >
                        <FaUsers />
                        Users
                    </Link>
                </div>

            </div>


            {/* Bottom */}

            <button
                onClick={handleLogout}
                className="
                flex
                items-center
                gap-3
                bg-red-500
                hover:bg-red-600
                text-white
                px-4
                py-3
                rounded-xl
                font-medium
                transition
                "
            >
                <FaSignOutAlt />

                Logout

            </button>

        </div>

    );

};

export default AdminSidebar;