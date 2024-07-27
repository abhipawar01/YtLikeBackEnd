import dotenv from "dotenv"

dotenv.config()
import connectDB from "./db/index.js";
import express from 'express';
const app = express();
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running On ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db Connection Failed !!!",err);
})
