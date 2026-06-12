import React, {useState} from "react";
import UserLayout from "../../layouts/UserLayout";
import RecommendationCard from "../../components/user/RecommendationCard";
import {generateRecommendation} from "../../services/recommdationService.js";

const NewRecommendation = () => {

    const [problem, setProblem] = useState("");
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const data = await generateRecommendation(problem);

            setRecommendation(data.consultation.recommendation);
        }
        catch (error) {
            console.log(error);
            alert(error.response?.data?.message);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <UserLayout>
            <div className=" bg-white rounded-3xl shadow-lg p-10 ">
                <h1 className=" text-3xl font-bold text-blue-700 mb-8 ">
                    New Recommendation
                </h1>
                <form onSubmit={handleSubmit}>
                    <label className=" block mb-3 font-medium ">
                        Describe Your Problem
                    </label>

                    <textarea
                        rows="6"
                        value={problem}
                        onChange={e =>setProblem(
                                    e.target.value
                                )
                        }
                        placeholder="Career problems, financial issues, health concerns, relationship problems..."
                        className=" w-full border border-blue-200 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-blue-500 "
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className=" mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold "
                    >
                        {
                            loading
                            ? "Generating..."
                            : "Generate Recommendation"
                        }
                    </button>
                </form>

                <RecommendationCard recommendation={ recommendation}/>
            </div>
        </UserLayout>
    );
};

export default NewRecommendation;