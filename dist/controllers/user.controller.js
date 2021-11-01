"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.loginUser = exports.deleteUser = exports.updateUser = exports.readUser = exports.createUser = void 0;
const logging_1 = require("../config/logging");
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_utils_1 = require("../utils/jwt.utils");
const NAMESPACE = "USER CONTROLLER";
const uploadFile = async (req, res) => {
    try {
        const options = {
            new: true,
            runValidators: true,
        };
        const profilePic = req.file?.buffer;
        const result = await user_model_1.default.findByIdAndUpdate(req.params.id, { profilePic }, options);
        res.status(201).send(result);
    }
    catch (e) {
        res.status(400).send({ message: "File upload fail" });
    }
};
exports.uploadFile = uploadFile;
const loginUser = async (req, res) => {
    try {
        const result = await user_model_1.default.findOne({ email: req.body.email });
        if (result) {
            const isValid = await bcrypt_1.default.compare(req.body.password, result.password);
            if (isValid) {
                const token = await jwt_utils_1.generateToken(result._id);
                logging_1.logging.info(NAMESPACE, "User Logged in succesfully!");
                res.status(200).send({ message: "User Logged in succesfully!", token });
            }
            else {
                res.status(400).send({ message: "Please enter the valid password" });
                logging_1.logging.error(NAMESPACE, "Please enter the valid password");
            }
        }
        else {
            res.status(400).send({ message: "No user found please check email id" });
        }
    }
    catch (e) {
        logging_1.logging.error(NAMESPACE, "Login in error", e);
    }
};
exports.loginUser = loginUser;
const createUser = async (req, res) => {
    try {
        req.body.password = await bcrypt_1.default.hash(req.body.password, 8);
        const result = await user_model_1.default.insertMany([req.body]);
        const token = await jwt_utils_1.generateToken(result[0]._id);
        res.status(200).send({ result, token });
        logging_1.logging.info(NAMESPACE, "User Created");
    }
    catch (e) {
        res.status(400).send(e);
        logging_1.logging.error(NAMESPACE, "error while creating user", e);
    }
};
exports.createUser = createUser;
const readUser = async (req, res) => {
    try {
        const result = await user_model_1.default.find();
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, "Users fetch from database");
    }
    catch (e) {
        res.status(400).send(e);
        logging_1.logging.error(NAMESPACE, "error while fetching users", e);
    }
};
exports.readUser = readUser;
const updateUser = async (req, res) => {
    try {
        req.body.password = await bcrypt_1.default.hash(req.body.password, 8);
        const options = {
            new: true,
            runValidators: true,
        };
        const result = await user_model_1.default.findByIdAndUpdate(req.params.id, req.body, options);
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, "User Updated");
    }
    catch (e) {
        logging_1.logging.error(NAMESPACE, "error while Updating user", e);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await user_model_1.default.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, "User Deleted");
    }
    catch (e) {
        logging_1.logging.error(NAMESPACE, "error while Deleting the user", e);
    }
};
exports.deleteUser = deleteUser;
