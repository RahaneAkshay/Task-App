import { Router } from "express";
import {createUser} from '../controllers/user.controller'
export const user = Router();

user.get('/create',createUser)