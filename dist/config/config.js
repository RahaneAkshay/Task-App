"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVERHOST_NAME = process.env.SERVERHOST_NAME || 'localhost';
const SERVER_PORT = process.env.SERVERPORT || 3000;
const SERVER = {
    server: SERVERHOST_NAME,
    port: SERVER_PORT
};
exports.config = {
    server: SERVER
};
