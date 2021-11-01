"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const logging_1 = require("../config/logging");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const NAMESPACE = "Auth Middleware";
const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        const decode = jsonwebtoken_1.default.verify(token, "naruto");
        const user = user_model_1.default.findOne({ _id: decode._id, token: token });
        if (!user) {
            throw new Error("Unauthorized user");
        }
        next();
    }
    catch (e) {
        logging_1.logging.error(NAMESPACE, "Authentification fail", e);
        res.status(400).send("Access denied");
    }
};
exports.auth = auth;
