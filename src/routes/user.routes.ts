import { Router } from "express";
import {createUser,readUser,updateUser,deleteUser,loginUser} from '../controllers/user.controller'
import { auth } from "../middleware/auth.middleware";
export const user = Router();

user.get('/fetch',auth,readUser)
user.post('/create',createUser)
user.post('/login',loginUser)
user.patch('/update/:id',auth,updateUser)
user.delete('/delete/:id',auth,deleteUser)