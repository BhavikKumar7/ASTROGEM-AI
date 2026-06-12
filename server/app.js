import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Astrologer API Running"
    });
});

export default app;