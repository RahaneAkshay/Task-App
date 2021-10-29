import { Schema, model } from "mongoose";
interface Task {
  description: string;
  completed: boolean;
}
const taskSchema = new Schema<Task>({
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export const TaskModel = model<Task>("todo", taskSchema);