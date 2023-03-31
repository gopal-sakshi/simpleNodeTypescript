import express, { Request, Response, Application} from 'express';
const app:Application = express();
const PORT = process.env.PORT || 3059;


app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js - jing chak!!!")
});

app.listen(PORT, ():void => {
    console.log(`Server @ ${PORT}`);
});


