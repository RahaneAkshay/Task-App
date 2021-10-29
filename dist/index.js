"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const logging_1 = require("./config/logging");
const user_routes_1 = require("./routes/user.routes");
const task_routes_1 = require("./routes/task.routes");
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const NAMESPACE = "index.ts";
app.use(express_1.default.json());
app.use('/user', user_routes_1.user);
app.use('/task', task_routes_1.task);
(async () => {
    try {
        await mongoose_1.default.connect(config_1.config.database.url);
        logging_1.logging.info(NAMESPACE, 'Connection sucessfull');
    }
    catch (e) {
        logging_1.logging.error(NAMESPACE, 'database connection error', e);
    }
})();
app.listen(config_1.config.server.port, () => {
    const MESSAGE = `Server started at ${config_1.config.server.server} on PORT : ${config_1.config.server.port}`;
    logging_1.logging.info(NAMESPACE, MESSAGE);
});
