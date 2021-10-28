import { Schema,model } from "mongoose";
import { NextFunction } from "express";
import bycrypt from 'bcrypt'

interface User{
    email:string,
    password:string
}

const schema = new Schema<User>({
    email:{type:String},
    password:{type:String}
})

// schema.pre('save',async function(next) {
//     const user = this
//     if(user.modified('password')){
//         user.password = await bycrypt.hash(user.password,8)
//     }
//     next()
// })

const UserModel = model<User>('user', schema);
export default UserModel;