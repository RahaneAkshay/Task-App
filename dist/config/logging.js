"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logging = void 0;
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [info] [${namespace}] ${message}`, object);
    }
    else {
        console.info(`[${getTimeStamp()}] [info] [${namespace}] ${message}`);
    }
};
const error = (namespace, message, object) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [debug] [${namespace}] ${message}`, object);
    }
    else {
        console.error(`[${getTimeStamp()}] [debug] [${namespace}] ${message}`);
    }
};
exports.logging = {
    info,
    error,
};
