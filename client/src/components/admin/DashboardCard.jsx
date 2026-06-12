import React from "react";

const DashboardCard = ({ title, value }) => {
    return (
        <div className=" bg-white rounded-3xl shadow-lg p-8 ">
            <h2 className=" text-gray-500 text-lg ">
                {title}
            </h2>

            <h1 className=" text-4xl font-bold text-blue-700 mt-4 ">
                {value}
            </h1>
        </div>
    );
};

export default DashboardCard;