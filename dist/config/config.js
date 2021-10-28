"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVERHOST_NAME = process.env.SERVERHOST_NAME || "localhost";
const SERVER_PORT = process.env.SERVERPORT || 3000;
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const userName = "akshay";
const password = "REuNN08RHJ8CQtwW";
const mongoUrl = `mongodb://${userName}:${password}@cluster0-shard-00-00.9lb3l.mongodb.net:27017,cluster0-shard-00-01.9lb3l.mongodb.net:27017,cluster0-shard-00-02.9lb3l.mongodb.net:27017/task-app?ssl=true&replicaSet=atlas-ix4euu-shard-0&authSource=admin&retryWrites=true&w=majority`;
const mongoose = {
    options: mongoOptions,
    url: mongoUrl
};
const SERVER = {
    server: SERVERHOST_NAME,
    port: SERVER_PORT,
};
exports.config = {
    server: SERVER,
    database: mongoose
};
