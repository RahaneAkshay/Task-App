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
const warn = (namespace, message, object) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [warn] [${namespace}] ${message}`, object);
    }
    else {
        console.warn(`[${getTimeStamp()}] [warn] [${namespace}] ${message}`);
    }
};
const debug = (namespace, message, object) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [debug] [${namespace}] ${message}`, object);
    }
    else {
        console.warn(`[${getTimeStamp()}] [debug] [${namespace}] ${message}`);
    }
};
exports.logging = {
    info,
    warn,
    debug,
};
