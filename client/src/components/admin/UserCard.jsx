import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
    return (
        <div className=" bg-white rounded-3xl shadow-lg p-6 ">
            <h2 className=" text-xl font-bold text-blue-700 ">
                {user.name}
            </h2>

            <p className="text-gray-600 mt-2">
                {user.email}
            </p>

            <p className="text-gray-500 mt-2">
                Role: {user.role}
            </p>

            {
                user.role !== "ADMIN" && (
                    <div className=" flex gap-3 mt-6 ">
                        <Link
                            to={`/admin/users/${user._id}`}
                            className=" bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl "
                        >
                            Details
                        </Link>

                        <Link
                            to={`/admin/users/${user._id}/consultations`}
                            className=" bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl "
                        >
                            Consultations
                        </Link>
                        <button
                            onClick={() =>
                                onDelete(
                                    user._id
                                )
                            }
                            className=" bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl "
                        >
                            Delete
                        </button>
                    </div>
                )
            }

        </div>
    );
};

export default UserCard;