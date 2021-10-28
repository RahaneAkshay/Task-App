import { Request, Response } from "express";
import { logging } from "../config/logging";
import UserModel from "../models/user.model";
import bycrypt from "bcrypt";

const NAMESPACE: string = "USER CONTROLLER";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.findOne({ email: req.body.email });
    if (result) {
      
       const isValid:boolean = await bycrypt.compare(req.body.password,result.password)
      if (isValid) {
        logging.info(NAMESPACE, "User Logged in succesfully!");
        res.status(200).send({ message: "User Logged in succesfully!" });
      } else {
        res.status(400).send({ message: "Please enter the valid password" });
        logging.error(NAMESPACE, "Please enter the valid password");
      }
    } else {
      res.status(400).send({ message: "No user found please check email id" });
    }
  } catch (e) {
    logging.error(NAMESPACE, "Login in error", e);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bycrypt.hash(req.body.password, 8);
    const result = await UserModel.insertMany([req.body]);
    res.status(200).send(result);
    logging.info(NAMESPACE, "User Created");
  } catch (e) {
    res.status(400).send(e);
    logging.error(NAMESPACE, "error while creating user", e);
  }
};
const readUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.find();
    res.status(200).send(result);
    logging.info(NAMESPACE, "Users fetch from database");
  } catch (e) {
    res.status(400).send(e);
    logging.error(NAMESPACE, "error while fetching users", e);
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bycrypt.hash(req.body.password, 8);
    const options = {
      new: true,
      runValidators: true,
    };
    const result = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.status(200).send(result);

    logging.info(NAMESPACE, "User Updated");
  } catch (e) {
    logging.error(NAMESPACE, "error while Updating user", e);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send(result);
    logging.info(NAMESPACE, "User Deleted");
  } catch (e) {
    logging.error(NAMESPACE, "error while Deleting the user", e);
  }
};

export { createUser, readUser, updateUser, deleteUser, loginUser };
