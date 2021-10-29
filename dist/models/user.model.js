"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
});
// schema.pre('save',async function(next) {
//     const user = this
//     if(user.modified('password')){
//         user.password = await bycrypt.hash(user.password,8)
//     }
//     next()
// })
const UserModel = mongoose_1.model("user", schema);
exports.default = UserModel;
