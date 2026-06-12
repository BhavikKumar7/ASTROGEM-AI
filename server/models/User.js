import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        dob: {
            type: Date,
            required: true
        },

        birthTime: {
            type: String,
            required: true,
            match: /^([01]\d|2[0-3]):([0-5]\d)$/
        },

        birthLocation: {
            city: {
                type: String,
                required: true,
                trim: true
            },
            district: {
                type: String,
                required: true,
                trim: true
            },
            state: {
                type: String,
                required: true,
                trim: true
            },
            country: {
                type: String,
                required: true,
                trim: true
            },
            latitude: {
                type: Number,
                required: true,
            },
            longitude: {
                type: Number,
                required: true,
            }
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER"
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;