import express from 'express'
import  {config } from './config/config';
import {logging} from './config/logging'
import { user } from './routes/user.routes';
import { task } from './routes/task.routes';
import mongoose  from 'mongoose';

const app = express();
const NAMESPACE = "index.ts"

app.use(express.json())
app.use('/user',user);
app.use('/task',task);

(async () => {
    try{
        await mongoose.connect(config.database.url)
        logging.info(NAMESPACE,'Connection sucessfull')
    }catch(e){
        logging.error(NAMESPACE,'database connection error',e)
    }
})();


app.listen(config.server.port,():void=>{
    const MESSAGE:string =`Server started at ${config.server.server} on PORT : ${config.server.port}`;
    logging.info(NAMESPACE,MESSAGE)
})






