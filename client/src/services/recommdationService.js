import api from "./api";

export const generateRecommendation = async (problem) => {
    const response = await api.post("/recommendations",
        {
            problem
        }
    );

    return response.data;
};

export const getRecommendationHistory = async () => {
    const response = await api.get(
        "/recommendations"
    );

    return response.data;
};

export const getRecommendationById = async (id) => {
    const response = await api.get(
        `/recommendations/${id}`
    );

    return response.data;
};

export const deleteRecommendation = async (id) => {
    const response = await api.delete(
        `/recommendations/${id}`
    );

    return response.data;
};