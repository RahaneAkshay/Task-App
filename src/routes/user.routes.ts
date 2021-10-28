import { Router } from "express";
import {createUser,readUser,updateUser,deleteUser,loginUser} from '../controllers/user.controller'
export const user = Router();

user.get('/fetch',readUser)
user.post('/create',createUser)
user.post('/login',loginUser)
user.patch('/update/:id',updateUser)
user.delete('/delete/:id',deleteUser)