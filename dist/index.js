"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const logging_1 = require("./config/logging");
const user_routes_1 = require("./routes/user.routes");
const app = express_1.default();
const NAMESPACE = "index.ts";
app.use(express_1.default.json());
app.use('/user', user_routes_1.user);
app.listen(config_1.config.server.port, () => {
    const MESSAGE = `Server started at ${config_1.config.server.server} on PORT : ${config_1.config.server.port}`;
    logging_1.logging.info(NAMESPACE, MESSAGE);
});
