import React from "react";

const RecommendationCard = ({ recommendation }) => {

    if (!recommendation) return null;

    const bilingual = (obj) => {

        if (!obj) return "";

        return `${obj.english} (${obj.hindi})`;

    };

    return (

        <div className="bg-white shadow-lg rounded-3xl p-10 mt-10">

            <h1 className="text-3xl font-bold text-blue-700 mb-8">
                Recommendation Result
            </h1>


            {/* Basic Details */}

            <div className="grid md:grid-cols-2 gap-6">

                <InfoCard
                    title="Moon Rashi"
                    value={bilingual(
                        recommendation.moonRashi
                    )}
                />

                <InfoCard
                    title="Lagna"
                    value={bilingual(
                        recommendation.lagna
                    )}
                />

                <InfoCard
                    title="Gemstone"
                    value={bilingual(
                        recommendation.gemstone
                    )}
                />

                <InfoCard
                    title="Ruling Planet"
                    value={bilingual(
                        recommendation.rulingPlanet
                    )}
                />

                <InfoCard
                    title="Metal"
                    value={bilingual(
                        recommendation.metal
                    )}
                />

                <InfoCard
                    title="Finger"
                    value={bilingual(
                        recommendation.finger
                    )}
                />

                <InfoCard
                    title="Best Day"
                    value={bilingual(
                        recommendation.bestDay
                    )}
                />

                <InfoCard
                    title="Best Time"
                    value={
                        recommendation.bestTime
                    }
                />

                <InfoCard
                    title="Deity"
                    value={bilingual(
                        recommendation.deity
                    )}
                />

                <InfoCard
                    title="Lucky Color"
                    value={bilingual(
                        recommendation.luckyColor
                    )}
                />

                <InfoCard
                    title="Lucky Number"
                    value={
                        recommendation.luckyNumber
                    }
                />

            </div>


            {/* Mantra */}

            <Section
                title="Mantra"
                items={[
                    {
                        english:
                            recommendation.mantra,
                        hindi: ""
                    }
                ]}
            />


            {/* Benefits */}

            <Section
                title="Benefits"
                items={
                    recommendation.benefits
                }
            />


            {/* Precautions */}

            <Section
                title="Precautions"
                items={
                    recommendation.precautions
                }
            />


            {/* Remedies */}

            <Section
                title="Other Remedies"
                items={
                    recommendation.otherRemedies
                }
            />

        </div>

    );

};



const InfoCard = ({
    title,
    value
}) => (

    <div className="bg-blue-50 rounded-2xl p-5">

        <h3 className="text-blue-700 font-semibold mb-2">

            {title}

        </h3>

        <p className="text-gray-700">

            {value}

        </p>

    </div>

);



const Section = ({
    title,
    items
}) => (

    <div className="mt-10">

        <h2 className="text-2xl font-bold text-blue-700 mb-4">

            {title}

        </h2>

        <div className="bg-blue-50 rounded-2xl p-6">

            <ul className="list-disc pl-6 space-y-3">

                {

                    items?.map(
                        (
                            item,
                            index
                        ) => (

                            <li
                                key={index}
                            >

                                <span className="font-medium">

                                    {
                                        item.english
                                    }

                                </span>

                                {

                                    item.hindi &&

                                    <span className="text-gray-600">

                                        {" "}
                                        (
                                        {
                                            item.hindi
                                        }
                                        )

                                    </span>

                                }

                            </li>

                        )
                    )

                }

            </ul>

        </div>

    </div>

);

export default RecommendationCard;