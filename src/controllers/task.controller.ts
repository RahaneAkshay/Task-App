import { Request, Response } from "express";
import { logging } from "../config/logging";
import { TaskModel } from "../models/task.model";

const NAMESPACE:string = "Task Controller";
interface TaskResult {
    _id?: String;
    description: String;
    completed: Boolean;
  }

const fetchTasks = async (req: Request, res: Response): Promise<any> => {
    try {
      const result: TaskResult[] = await TaskModel.find();
      res.status(200).send(result);
      logging.info(NAMESPACE, " Data send to user");
    } catch (err: any) {
      res.status(400).send(err);
      logging.error(NAMESPACE, "Error while fetching the tasks",err);
    }
  }

const createTask = async (req: Request, res: Response): Promise<any> => {
    try {
      const result = await TaskModel.insertMany([req.body]);
      res.status(200).send(result);
      logging.info(NAMESPACE, " task created");
    } catch (err: any) {
      res.status(400).send(err);
      logging.error(NAMESPACE, "Error while creating the tasks",err);
    }
  }

const updateTask =  async (req: Request, res: Response): Promise<any> => {
    try {
      const _id: string = req.params.id;
      const result = await TaskModel.updateOne({ _id }, { $set: req.body });
      res.status(200).send(result);
      logging.info(NAMESPACE, " task updated");
    } catch (err: any) {
      res.status(400).send(err);
      logging.error(NAMESPACE, "Error while updating the tasks",err);
    }
  }
const deleteTask = async (req: Request, res: Response): Promise<any> => {
    try {
      const _id: string = req.params.id;
      const result = await TaskModel.deleteOne({_id});
      res.status(200).send(result);
      logging.info(NAMESPACE, " task Deleted succesfully!");
    } catch (err: any) {
      res.status(400).send(err);
      logging.error(NAMESPACE, "Error while deleting the tasks",err);
    }
  }
export {
    fetchTasks,
    createTask,
    updateTask,
    deleteTask
}