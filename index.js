import * as dotenv from 'dotenv';
import cors from "cors";
import express from "express";
import mongoose from 'mongoose';
import{
    loginRoute,
    signupRoute,
    forgotPasswordRoute,
    passwordResetRoute
} from "./routes/auth.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//connecting the mongoose//

mongoose
   .connect(process.env.MONGO_URL,{useNewUrlParser:true})
   .then(()=>console.log("Mongoose is connected😜"))
   .catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("This backend has been developed to create signin , signup , password reset pages. Please work with the UI for better understanding")
});

//Setting routes//

app.use("/login",loginRoute);
app.use("/signup",signupRoute);
app.use("/forgotPassword",forgotPasswordRoute);
app.use("/passwordReset",passwordResetRoute);

// Setting the port //

app.listen(PORT,()=>console.log("server is connected on the port",PORT))