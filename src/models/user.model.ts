import { Schema, model } from "mongoose";
import { NextFunction } from "express";
import bycrypt from "bcrypt";
import { buffer } from "stream/consumers";

interface User {
  email: string;
  password: string;
  token: any;
  profilePic:Buffer
}

const schema = new Schema<User>({
  email: { type: String, unique: true },
  password: { type: String },
  token: {type:String},
  profilePic :{
    data: Buffer,
    contentType: String
  }
},{
  timestamps:true
});

// schema.pre('save',async function(next) {
//     const user = this
//     if(user.modified('password')){
//         user.password = await bycrypt.hash(user.password,8)
//     }
//     next()
// })

const UserModel = model<User>("user", schema);
export default UserModel;
