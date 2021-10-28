"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.readUser = exports.createUser = void 0;
const logging_1 = require("../config/logging");
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const NAMESPACE = "USER CONTROLLER";
const createUser = async (req, res) => {
    try {
        req.body.password = await bcrypt_1.default.hash(req.body.password, 8);
        const result = await user_model_1.default.insertMany([req.body]);
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, "User Created");
    }
    catch (e) {
        res.status(400).send(e);
        logging_1.logging.warn(NAMESPACE, "error while creating user", e);
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
        logging_1.logging.warn(NAMESPACE, "error while fetching users", e);
    }
};
exports.readUser = readUser;
const updateUser = async (req, res) => {
    try {
        req.body.password = await bcrypt_1.default.hash(req.body.password, 8);
        res.status(200).send({ message: "User created successfull" });
        logging_1.logging.info(NAMESPACE, "User Created");
    }
    catch (e) {
        logging_1.logging.warn(NAMESPACE, "error while creating user", e);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        res.status(200).send({ message: "User created successfull" });
        logging_1.logging.info(NAMESPACE, "User Created");
    }
    catch (e) {
        logging_1.logging.warn(NAMESPACE, "error while creating user", e);
    }
};
exports.deleteUser = deleteUser;
