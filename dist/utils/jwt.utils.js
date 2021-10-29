"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const generateToken = async (id) => {
    const token = jsonwebtoken_1.default.sign({ _id: id }, "naruto", { expiresIn: "120h" });
    const options = {
        new: true,
        runValidators: true,
    };
    const result = await user_model_1.default.findByIdAndUpdate(id, { token: token }, options);
    return token;
};
exports.generateToken = generateToken;
