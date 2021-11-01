import { NextFunction, Router } from "express";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  loginUser,
  uploadFile,
} from "../controllers/user.controller";
import { auth } from "../middleware/auth.middleware";
import multer from "multer";
const upload = multer({
  limits: {
    fieldSize: 2048,
  },
  fileFilter(_req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      return cb(new Error("Please upload a Word document"));
    }
    cb(null, true);
  },
});
export const user = Router();
user.post(
  "/upload/:id",
  upload.single("upload"),
  uploadFile,
  (error: any, req: any, res: any, next: NextFunction) => {
    res.status(400).send({ error: error.message });
  }
);
user.get("/fetch", auth, readUser);
user.post("/create", createUser);
user.post("/login", loginUser);
user.patch("/update/:id", auth, updateUser);
user.delete("/delete/:id", auth, deleteUser);
