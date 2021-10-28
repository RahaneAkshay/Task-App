import { Request,Response } from "express";
import { logging } from "../config/logging";

const NAMESPACE:string ='USER CONTROLLER';

const createUser = (req:Request,res:Response)=>{
 try{
    res.status(200).send({message:"User created successfull"})
    logging.info(NAMESPACE,'User Created')
 }catch(e){
    logging.warn(NAMESPACE,'error while creating user',e)
 }
}




export  {
createUser
}