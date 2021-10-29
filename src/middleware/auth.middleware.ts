import { Request,Response,NextFunction } from "express"
import { logging } from "../config/logging";
import jwt from "jsonwebtoken";
import UserModel from '../models/user.model'
const NAMESPACE = 'Auth Middleware'
export const auth = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const token = req.header('Authorization')?.replace('Bearer ','')!
        const decode:any = jwt.verify(token,'naruto')
        const user = UserModel.findOne({ _id: decode._id, 'token':token})
        if(!user){
            throw new Error('Unauthorized user')
        }
        console.log(user);
        next();

    }catch(e){
        logging.error(NAMESPACE,'Authentification fail',e)
        res.status(400).send('Access denied')
    }
    
}