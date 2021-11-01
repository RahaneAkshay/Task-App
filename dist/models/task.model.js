"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
}, {
    timestamps: true,
});
exports.TaskModel = mongoose_1.model("todo", taskSchema);
