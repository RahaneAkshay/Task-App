import { Request, Response } from "express";
import { logging } from "../config/logging";
import UserModel from "../models/user.model";
import bycrypt from "bcrypt";

const NAMESPACE: string = "USER CONTROLLER";

const createUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bycrypt.hash(req.body.password, 8);
    const result = await UserModel.insertMany([req.body]);
    res.status(200).send(result);
    logging.info(NAMESPACE, "User Created");
  } catch (e) {
    res.status(400).send(e);
    logging.warn(NAMESPACE, "error while creating user", e);
  }
};
const readUser = async(req: Request, res: Response) => {
  try {
    const result = await UserModel.find()
    res.status(200).send(result);
    logging.info(NAMESPACE, "Users fetch from database");
  } catch (e) {
    res.status(400).send(e);
    logging.warn(NAMESPACE, "error while fetching users", e);
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bycrypt.hash(req.body.password, 8);
    res.status(200).send({ message: "User created successfull" });
    logging.info(NAMESPACE, "User Created");
  } catch (e) {
    logging.warn(NAMESPACE, "error while creating user", e);
  }
};

const deleteUser = async(req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "User created successfull" });
    logging.info(NAMESPACE, "User Created");
  } catch (e) {
    logging.warn(NAMESPACE, "error while creating user", e);
  }
};

export { createUser, readUser, updateUser, deleteUser };
