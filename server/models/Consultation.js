import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        problem: {
            type: String,
            required: true
        },

        vedicData: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },

        recommendation: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Consultation = mongoose.model(
    "Consultation",
    consultationSchema
);

export default Consultation;