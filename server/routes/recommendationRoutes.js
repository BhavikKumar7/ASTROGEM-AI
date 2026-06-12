import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
    generateRecommendation,
    getRecommendationHistory,
    getRecommendationById,
    deleteRecommendation
} from "../controllers/recommendationController.js";

const router = express.Router();

router.post(
    "/",
    protect,
    generateRecommendation
);

router.get(
    "/",
    protect,
    getRecommendationHistory
);

router.get(
    "/:id",
    protect,
    getRecommendationById
);

router.delete(
    "/:id",
    protect,
    deleteRecommendation
);

export default router;