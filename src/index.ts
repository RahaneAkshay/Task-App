import express from 'express'
import  {config } from './config/config';
import {logging} from './config/logging'
import { user } from './routes/user.routes';

const app = express();
const NAMESPACE = "index.ts"
app.use(express.json())
app.use('/user',user)



app.listen(config.server.port,():void=>{
    const MESSAGE:string =`Server started at ${config.server.server} on PORT : ${config.server.port}`;
    logging.info(NAMESPACE,MESSAGE)
})






