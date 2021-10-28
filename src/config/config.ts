import dotenv from "dotenv";

dotenv.config();

const SERVERHOST_NAME = process.env.SERVERHOST_NAME || "localhost";
const SERVER_PORT = process.env.SERVERPORT || 3000;

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const userName: string = "akshay";
const password: string = "REuNN08RHJ8CQtwW";
const mongoUrl: string = `mongodb://${userName}:${password}@cluster0-shard-00-00.9lb3l.mongodb.net:27017,cluster0-shard-00-01.9lb3l.mongodb.net:27017,cluster0-shard-00-02.9lb3l.mongodb.net:27017/task-app?ssl=true&replicaSet=atlas-ix4euu-shard-0&authSource=admin&retryWrites=true&w=majority`;
const mongoose = {
    options: mongoOptions,
    url:mongoUrl
}

const SERVER = {
  server: SERVERHOST_NAME,
  port: SERVER_PORT,
};

export const config = {
  server: SERVER,
  database:mongoose
};
