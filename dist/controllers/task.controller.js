"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.fetchTasks = void 0;
const logging_1 = require("../config/logging");
const task_model_1 = require("../models/task.model");
const NAMESPACE = "Task Controller";
const fetchTasks = async (req, res) => {
    try {
        const completed = req.query.completed;
        console.log(completed);
        let result = [];
        if (completed) {
            result = await task_model_1.TaskModel.find({
                completed: completed,
            }, { skip: 0, limit: 2 });
        }
        else {
            result = await task_model_1.TaskModel.find();
        }
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, " Data send to user");
    }
    catch (err) {
        res.status(400).send(err);
        logging_1.logging.error(NAMESPACE, "Error while fetching the tasks", err);
    }
};
exports.fetchTasks = fetchTasks;
const createTask = async (req, res) => {
    try {
        const result = await task_model_1.TaskModel.insertMany([req.body]);
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, " task created");
    }
    catch (err) {
        res.status(400).send(err);
        logging_1.logging.error(NAMESPACE, "Error while creating the tasks", err);
    }
};
exports.createTask = createTask;
const updateTask = async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await task_model_1.TaskModel.updateOne({ _id }, { $set: req.body });
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, " task updated");
    }
    catch (err) {
        res.status(400).send(err);
        logging_1.logging.error(NAMESPACE, "Error while updating the tasks", err);
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await task_model_1.TaskModel.deleteOne({ _id });
        res.status(200).send(result);
        logging_1.logging.info(NAMESPACE, " task Deleted succesfully!");
    }
    catch (err) {
        res.status(400).send(err);
        logging_1.logging.error(NAMESPACE, "Error while deleting the tasks", err);
    }
};
exports.deleteTask = deleteTask;
