import express, {Response, Request} from "express"
import bodyParser from "body-parser";

import router from "../routes/router"

const app = express();


const PORT = 5000;


app.get( "/", (req:Request, res: Response)=>{

    res.send("hello world 5678")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/user", router);


app.listen(PORT, ()=>{

    console.log(`server started on port ${PORT}`)
});