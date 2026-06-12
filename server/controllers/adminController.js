import User from "../models/User.js";
import Consultation from "../models/Consultation.js";

export const getDashboard = async (req, res) => {
    try {
        const totalUsers =
            await User.countDocuments({
                role: "USER"
            });

        const totalAdmins =
            await User.countDocuments({
                role: "ADMIN"
            });

        const totalConsultations =
            await Consultation.countDocuments();

        res.status(200).json({
            success: true,

            dashboard: {
                totalUsers,
                totalAdmins,
                totalConsultations
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users =
            await User.find()
                .select("-password")
                .sort({
                    createdAt: -1
                });

        res.status(200).json({
            success: true,
            count: users.length,
            users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const getUserById = async (req, res) => {
    try {
        const user =
            await User.findById(
                req.params.id
            ).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

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

export const deleteUser = async (req, res) => {
    try {
        const user =
            await User.findById(
                req.params.id
            );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        await Consultation.deleteMany({
            user: req.params.id
        });

        await User.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({
            success: true,
            message:
                "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getUserConsultations = async (req, res) => {
    try {
        const user =
            await User.findById(
                req.params.id
            ).select(
                "name email"
            );

        if (!user) {
            return res.status(404).json({
                success: false,
                message:
                    "User not found"
            });
        }

        const consultations =
            await Consultation.find({
                user: req.params.id
            })
                .sort({
                    createdAt: -1
                });

        res.status(200).json({
            success: true,
            user,
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

export const deleteUserConsultation = async (req, res) => {
    try {
        const consultation =
            await Consultation.findOne({
                _id:
                    req.params.consultationId,

                user:
                    req.params.userId
            });

        if (!consultation) {
            return res.status(404).json({
                success: false,
                message:
                    "Consultation not found"
            });
        }

        await consultation.deleteOne();
        res.status(200).json({
            success: true,
            message:
                "Consultation deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error.message
        });
    }
};


export const getAnalytics = async (req, res) => {
    try {
        const totalUsers =
            await User.countDocuments({
                role: "USER"
            });

        const totalAdmins =
            await User.countDocuments({
                role: "ADMIN"
            });

        const totalConsultations =
            await Consultation.countDocuments();


        const gemstoneAnalytics =
            await Consultation.aggregate([
                {
                    $group: {
                        _id: {
                            english:
                                "$recommendation.gemstone.english",

                            hindi:
                                "$recommendation.gemstone.hindi"
                        },

                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                }
            ]);

        const problemAnalytics =
            await Consultation.aggregate([
                {
                    $group: {
                        _id:
                            "$problem",

                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                },
                {
                    $limit: 10
                }
            ]);

        const monthlyConsultations =
            await Consultation.aggregate([
                {
                    $group: {
                        _id: {
                            year: {
                                $year: "$createdAt"
                            },

                            month: {
                                $month: "$createdAt"
                            }
                        },

                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        "_id.year": 1,
                        "_id.month": 1
                    }
                }
            ]);

        const recentConsultations =
            await Consultation.find()
                .populate(
                    "user",
                    "name email"
                )
                .sort({
                    createdAt: -1
                })
                .limit(10);


        res.status(200).json({
            success: true,

            analytics: {

                totalUsers,

                totalAdmins,

                totalConsultations,

                gemstoneAnalytics,

                problemAnalytics,

                monthlyConsultations,

                recentConsultations

            }
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message:
                error.message
        });

    }
};