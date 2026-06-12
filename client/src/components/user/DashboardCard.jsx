import React from "react";

const DashboardCard = ({title, value}) => {
    return (
        <div className=" bg-white shadow-md rounded-2xl p-6 ">
            <h2 className="text-gray-500 mb-2">
                {title}
            </h2>

            <p className="text-3xl font-bold text-blue-700">
                {value}
            </p>
        </div>

    );

};

export default DashboardCard;