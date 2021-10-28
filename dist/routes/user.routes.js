"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
exports.user = express_1.Router();
exports.user.get('/create', user_controller_1.createUser);
