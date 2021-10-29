"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
exports.task = express_1.Router();
exports.task.get("/fetch", task_controller_1.fetchTasks);
exports.task.post("/create", task_controller_1.createTask);
exports.task.patch("/update/:id", task_controller_1.updateTask);
exports.task.delete("/delete/:id", task_controller_1.deleteTask);