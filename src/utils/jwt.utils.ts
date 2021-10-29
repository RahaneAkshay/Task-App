import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";

const generateToken = async (id: any) => {
  const token: string = jwt.sign({ _id: id }, "naruto", { expiresIn: "120h" });
  const options = {
    new: true,
    runValidators: true,
  };
  const result = await UserModel.findByIdAndUpdate(
    id,
    { token: token },
    options
  );
  return token;
};

export { generateToken };
