import React,{useEffect,useState} from "react";
import UserLayout from "../../layouts/UserLayout";
import HistoryCard from "../../components/user/HistoryCard";
import {getRecommendationHistory, deleteRecommendation} from "../../services/recommdationService.js";

const RecommendationHistory = () => {
    const [consultations, setConsultations] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHistory();
    }, []);


    const fetchHistory = async () => {
        try {
            const data = await getRecommendationHistory();

            setConsultations(
                data.consultations
            );
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteRecommendation(id);

            setConsultations(
                consultations.filter(
                    consultation =>
                        consultation._id !== id
                )
            );
        }

        catch (error) {
            console.log(error);
        }
    };


    return (
        <UserLayout>
            <h1 className=" text-3xl font-bold text-blue-700 mb-8 ">
                Recommendation History
            </h1>

            {
                loading ?
                    (
                        <h2>
                            Loading...
                        </h2>
                    )
                    :
                    consultations.length === 0 ?
                        (
                            <h2>
                                No recommendations found.
                            </h2>
                        )
                        :
                        (

                            <div className=" grid md:grid-cols-2 gap-6 ">
                                {
                                    consultations.map(
                                        consultation => (
                                            <HistoryCard
                                                key={
                                                    consultation._id
                                                }
                                                consultation={
                                                    consultation
                                                }
                                                onDelete={
                                                    handleDelete
                                                }
                                            />
                                        )
                                    )
                                }
                            </div>
                        )
            }
        </UserLayout>
    );
};

export default RecommendationHistory;