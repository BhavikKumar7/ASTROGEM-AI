import express from "express";

import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import {
    getDashboard,
    getAnalytics,
    getAllUsers,
    getUserById,
    deleteUser,
    getUserConsultations,
    deleteUserConsultation
}
from "../controllers/adminController.js";

const router = express.Router();

router.use(
    protect,
    authorize("ADMIN")
);

router.get(
    "/dashboard",
    getDashboard
);

router.get(
    "/analytics",
    getAnalytics
);

router.get(
    "/users",
    getAllUsers
);

router.get(
    "/users/:id",
    getUserById
);

router.delete(
    "/users/:id",
    deleteUser
);

router.get(
    "/users/:id/consultations",
    getUserConsultations
);

router.delete(
    "/users/:userId/consultations/:consultationId",
    deleteUserConsultation
);

export default router;