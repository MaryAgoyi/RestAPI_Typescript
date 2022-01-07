import express, {Router,  Request, Response} from "express";
import { v4 as uuidv4 } from 'uuid';
import { userID, address} from "../src/types.interface";

const router:Router = Router();

const usersid: userID[] = [];
const userAddress: address[] = [];





router.get( "/", (req:Request, res: Response)=>{

    res.json(userAddress)
})


router.post( "/", (req:Request, res: Response)=>{

    const {Name, Surname,Telephone, Email } = req.body;
           const id: string = uuidv4()
        userAddress.push({Id:id,Name, Surname,Telephone, Email } );
     
        
    res.send(`The post for ${Name} has been added`)
})



export default router;