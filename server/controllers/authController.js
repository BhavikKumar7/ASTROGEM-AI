import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import validatePassword from "../utils/validatePassword.js";

export const register = async (req, res) => {
    try {
        const {
            name,
            dob,
            birthTime,
            birthCity,
            birthDistrict,
            birthState,
            birthCountry,
            latitude,
            longitude,
            email,
            password
        } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        if (!validatePassword(password)) {
            return res.status(400).json({
                success: false,
                message:
                    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            dob,
            birthTime,
            birthLocation: {
                city: birthCity,
                district: birthDistrict,
                state: birthState,
                country: birthCountry,
                latitude: latitude,
                longitude: longitude
            },
            email,
            password: hashedPassword
        });

        const token = generateToken(user._id, user.role);

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                dob: user.dob,
                birthTime: user.birthTime,
                birthLocation: user.birthLocation,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });

        }

        const token = generateToken(user._id, user.role);

        res.status(200).json({
            success: true,
            token,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getMe = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    });
};

export const logout = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};