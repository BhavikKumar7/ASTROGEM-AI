import React from "react";

const ConsultationCard = ({consultation, userId, onDelete}) => {
    const recommendation = consultation.recommendation;

    return (
        <div className=" bg-white rounded-3xl shadow-lg p-6 ">
            <h2 className=" text-xl font-bold text-blue-700 mb-4 ">
                {consultation.problem}
            </h2>

            <div className="space-y-3">
                <p>
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

                <p>
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

                <p>
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
            </div>

            <button
                onClick={() =>
                    onDelete(
                        consultation._id
                    )
                }
                className=" mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl "
            >
                Delete Consultation
            </button>
        </div>
    );
};

export default ConsultationCard;