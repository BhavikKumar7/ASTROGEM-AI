import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";
import { getRecommendationById } from "../../services/recommdationService.js";
import RecommendationCard from "../../components/user/RecommendationCard";

const RecommendationDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [consultation, setConsultation] = useState(null);

  useEffect(() => {
    fetchRecommendation();
  }, []);

  const fetchRecommendation = async () => {
    try {
      const data = await getRecommendationById(id);

      setConsultation(
        data.consultation
      );
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <UserLayout>
        <h1>Loading...</h1>
      </UserLayout>
    );
  }

  // const recommendation = consultation.recommendation;

  return (
    // <UserLayout>
    //     <div className=" bg-white rounded-3xl shadow-lg p-10 ">
    //         <h1 className=" text-4xl font-bold text-blue-700 mb-10 ">
    //           Recommendation Details
    //         </h1>

    //         {/* Problem */}
    //         <div className=" mb-8 bg-blue-50 rounded-2xl p-6 ">
    //             <h2 className=" text-xl font-semibold text-blue-700 mb-3 ">
    //                 Problem
    //             </h2>

    //             <p>
    //               {consultation.problem}
    //             </p>
    //         </div>

    //         <div className=" grid md:grid-cols-2 gap-8 ">
    //             <InfoCard
    //                 title="Gemstone"
    //                 value={recommendation.gemstone}
    //             />

    //             <InfoCard
    //                 title="Zodiac Sign"
    //                 value={recommendation.zodiacSign}
    //             />

    //             <InfoCard
    //                 title="Ruling Planet"
    //                 value={recommendation.rulingPlanet}
    //             />

    //             <InfoCard
    //                 title="Metal"
    //                 value={recommendation.metal}
    //             />

    //             <InfoCard
    //                 title="Finger"
    //                 value={recommendation.finger}
    //             />

    //             <InfoCard
    //                 title="Best Day"
    //                 value={recommendation.bestDay}
    //             />

    //             <InfoCard
    //                 title="Best Time"
    //                 value={recommendation.bestTime}
    //             />

    //             <InfoCard
    //                 title="Lucky Color"
    //                 value={recommendation.luckyColor}
    //             />

    //             <InfoCard
    //                 title="Lucky Number"
    //                 value={recommendation.luckyNumber}
    //             />

    //             <InfoCard
    //                 title="Deity"
    //                 value={recommendation.deity}
    //             />
    //         </div>

    //         {/* Mantra */}
    //         <Section
    //             title="Mantra"
    //             items={[
    //                 recommendation.mantra
    //             ]}
    //         />

    //         {/* Benefits */}
    //         <Section
    //             title="Benefits"
    //             items={
    //                 recommendation.benefits
    //             }
    //         />

    //         {/* Precautions */}
    //         <Section
    //             title="Precautions"
    //             items={
    //                 recommendation.precautions
    //             }
    //         />

    //         {/* Remedies */}
    //         <Section
    //             title="Other Remedies"
    //             items={
    //                 recommendation.otherRemedies
    //             }
    //         />
    //     </div>
    // </UserLayout>
    <UserLayout>

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">

          Recommendation Details

        </h1>

        <div className="bg-blue-50 rounded-2xl p-6 mb-10">

          <h2 className="text-xl font-semibold text-blue-700 mb-3">

            Problem

          </h2>

          <p>

            {consultation.problem}

          </p>

        </div>

        <RecommendationCard
          recommendation={
            consultation.recommendation
          }
        />

      </div>

    </UserLayout>
  );
};

const InfoCard = ({ title, value }) => (
  <div className=" bg-blue-50 rounded-2xl p-5 ">
    <h3 className=" text-blue-700 font-semibold mb-2 ">
      {title}
    </h3>

    <p>
      {value}
    </p>
  </div>
);

const Section = ({ title, items }) => (
  <div className="mt-10">
    <h2 className=" text-2xl font-bold text-blue-700 mb-4 ">
      {title}
    </h2>

    <div className=" bg-blue-50 rounded-2xl p-6 ">
      <ul className=" list-disc pl-6 space-y-2 ">
        {
          items?.map(
            (item, index) => (
              <li key={index}>
                {item}
              </li>
            )
          )
        }
      </ul>
    </div>
  </div>
);

export default RecommendationDetails;