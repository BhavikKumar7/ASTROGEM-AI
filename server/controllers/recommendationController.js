import User from "../models/User.js";
import Consultation from "../models/Consultation.js";

import generateVedicData from "../services/astrologyService.js";
import formatVedicData from "../services/vedicDataFormatter.js";
import generateGemstoneRecommendation from "../services/geminiService.js";

export const generateRecommendation = async (req, res) => {
    try {
        const { problem } = req.body;
        if (!problem) {
            return res
                .status(400)
                .json({
                    success: false,
                    message:
                        "Problem is required"
                });
        }

        const user =
            await User.findById(
                req.user._id
            );

        const rawVedicData =
            await generateVedicData(user);

        const vedicData =
            formatVedicData(
                rawVedicData
            );

        const recommendation =
            await generateGemstoneRecommendation(
                problem,
                vedicData
            );

        const consultation =
            await Consultation.create({
                user:
                    user._id,
                problem,
                vedicData,
                recommendation
            }
            );

        res.status(201).json({
            success: true,
            consultation
        });

    } catch (error) {
        console.error(
            error
        );
        res.status(500).json({
            success: false,
            message:
                error.message
        });
    }
};

export const getRecommendationHistory = async (req, res) => {
    try {
        const consultations =
            await Consultation
                .find({
                    user:
                        req.user._id
                })
                .sort({
                    createdAt:
                        -1
                });

        res.status(200).json({
            success: true,
            count:
                consultations.length,

            consultations
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error.message
        });
    }
};

export const getRecommendationById = async (req, res) => {
    try {
        const consultation =
            await Consultation.findById(
                req.params.id
            );

        if (!consultation) {
            return res.status(404)
                .json({
                    success: false,
                    message:
                        "Consultation not found"
                });
        }

        res.status(200).json({
            success: true,
            consultation
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error.message
        });
    }
};

export const deleteRecommendation = async (req, res) => {
    try {
        const consultation =
            await Consultation.findById(
                req.params.id
            );

        if (!consultation) {
            return res.status(404)
                .json({
                    success: false,
                    message:
                        "Consultation not found"
                });
        }

        await consultation.deleteOne();

        res.status(200).json({
            success: true,
            message:
                "Deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error.message
        });
    }
};