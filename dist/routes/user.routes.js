"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const multer_1 = __importDefault(require("multer"));
const upload = multer_1.default({
    limits: {
        fieldSize: 2048,
    },
    fileFilter(_req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
            return cb(new Error("Please upload a Word document"));
        }
        cb(null, true);
    },
});
exports.user = express_1.Router();
exports.user.post("/upload/:id", upload.single("upload"), user_controller_1.uploadFile, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});
exports.user.get("/fetch", auth_middleware_1.auth, user_controller_1.readUser);
exports.user.post("/create", user_controller_1.createUser);
exports.user.post("/login", user_controller_1.loginUser);
exports.user.patch("/update/:id", auth_middleware_1.auth, user_controller_1.updateUser);
exports.user.delete("/delete/:id", auth_middleware_1.auth, user_controller_1.deleteUser);
