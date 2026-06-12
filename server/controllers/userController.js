import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Consultation from "../models/Consultation.js";
import validatePassword from "../utils/validatePassword.js";

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(
            req.user._id
        ).select("-password");

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(
            req.user._id
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const {
            name,
            dob,
            birthTime,
            birthLocation
        } = req.body;

        if (name)
            user.name = name;

        if (dob)
            user.dob = dob;

        if (birthTime)
            user.birthTime = birthTime;

        if (birthLocation) {
            user.birthLocation = {
                city:
                    birthLocation.city ??
                    user.birthLocation.city,
                district:
                    birthLocation.district ??
                    user.birthLocation.district,
                state:
                    birthLocation.state ??
                    user.birthLocation.state,
                country:
                    birthLocation.country ??
                    user.birthLocation.country,
                latitude:
                    birthLocation.latitude ??
                    user.birthLocation.latitude,
                longitude:
                    birthLocation.longitude ??
                    user.birthLocation.longitude
            };
        }

        await user.save();

        const updatedUser =
            await User.findById(
                user._id
            ).select("-password");

        res.status(200).json({
            success: true,
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getDashboardStats = async (req, res) => {
    try {
        const totalConsultations =
            await Consultation.countDocuments({
                user: req.user._id
            });

        const consultations =
            await Consultation.find({
                user: req.user._id
            });

        const gemstones = new Set();

        consultations.forEach(
            consultation => {
                gemstones.add(
                    consultation.recommendation.gemstone
                );
            }
        );

        res.status(200).json({
            success: true,
            stats: {
                consultations: totalConsultations,
                recommendations: totalConsultations,
                gemstones: gemstones.size
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};