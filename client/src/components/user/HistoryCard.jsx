import React from "react";
import { Link } from "react-router-dom";

const HistoryCard = ({
    consultation,
    onDelete
}) => {

    const recommendation =
        consultation.recommendation;

    return (

        <div className="
        bg-white
        rounded-3xl
        shadow-md
        p-6
        ">

            <h2 className="
            text-xl
            font-semibold
            text-blue-700
            mb-4
            ">
                {consultation.problem}
            </h2>


            <p className="text-gray-600 mb-2">

                <strong>
                    Moon Rashi:
                </strong>

                {" "}

                {recommendation.moonRashi?.english}

                {" "}

                (

                {recommendation.moonRashi?.hindi}

                )

            </p>


            <p className="text-gray-600 mb-2">

                <strong>
                    Gemstone:
                </strong>

                {" "}

                {recommendation.gemstone?.english}

                {" "}

                (

                {recommendation.gemstone?.hindi}

                )

            </p>


            <p className="text-gray-600 mb-4">

                <strong>
                    Ruling Planet:
                </strong>

                {" "}

                {recommendation.rulingPlanet?.english}

                {" "}

                (

                {recommendation.rulingPlanet?.hindi}

                )

            </p>


            <div className="flex gap-4">

                <Link
                    to={`/recommendations/${consultation._id}`}
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    "
                >
                    View
                </Link>

                <button
                    onClick={() =>
                        onDelete(
                            consultation._id
                        )
                    }
                    className="
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    "
                >
                    Delete
                </button>

            </div>

        </div>

    );

};

export default HistoryCard;