import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
    getProfile,
    updateProfile,
    getDashboardStats
} from "../controllers/userController.js";

const router = express.Router();

router.get(
    "/profile",
    protect,
    getProfile
);

router.put(
    "/profile",
    protect,
    updateProfile
);

router.get(
    "/dashboard",
    protect,
    getDashboardStats
);

export default router;