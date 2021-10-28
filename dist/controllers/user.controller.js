"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const logging_1 = require("../config/logging");
const NAMESPACE = 'USER CONTROLLER';
const createUser = (req, res) => {
    try {
        res.status(200).send({ message: "User created successfull" });
        logging_1.logging.info(NAMESPACE, 'User Created');
    }
    catch (e) {
        logging_1.logging.warn(NAMESPACE, 'error while creating user', e);
    }
};
exports.createUser = createUser;
