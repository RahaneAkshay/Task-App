import express from 'express'
const app = express();
const PORT:number = 3000;
 app.use(express.json())



app.listen(PORT,():void=>{
    console.log(`Server started at port ${PORT}`);
})






