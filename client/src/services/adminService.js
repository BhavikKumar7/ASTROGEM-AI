import api from "./api";

export const getDashboard = async () => {
    const response =
        await api.get(
            "/admin/dashboard"
        );

    return response.data;
};

export const getAnalytics = async () => {
    const response =
        await api.get(
            "/admin/analytics"
        );

    return response.data;
};

export const getAllUsers = async () => {
    const response =
        await api.get(
            "/admin/users"
        );

    return response.data;
};

export const getUserById = async (id) => {
    const response =
        await api.get(
            `/admin/users/${id}`
        );

    return response.data;
};

export const deleteUser = async (id) => {
    const response =
        await api.delete(
            `/admin/users/${id}`
        );

    return response.data;
};

export const getUserConsultations = async (id) => {
    const response =
        await api.get(
            `/admin/users/${id}/consultations`
        );

    return response.data;
};

export const deleteUserConsultation = async (userId, consultationId) => {
    const response =
        await api.delete(
            `/admin/users/${userId}/consultations/${consultationId}`
        );

    return response.data;
};