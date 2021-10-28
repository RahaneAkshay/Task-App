import { Router } from "express";
import {createUser,readUser,updateUser,deleteUser} from '../controllers/user.controller'
export const user = Router();

user.get('/create',createUser)
