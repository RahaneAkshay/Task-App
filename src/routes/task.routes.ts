import { Request, Router, Response } from "express";
import { fetchTasks ,createTask, updateTask,deleteTask } from "../controllers/task.controller";

export const task = Router();
task.get("/fetch",fetchTasks);

task.post("/create", createTask);

task.patch("/update/:id", updateTask);

task.delete("/delete/:id",deleteTask );