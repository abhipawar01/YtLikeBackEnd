require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running On ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.lof("MONGO db Connection Failed !!!",err);
})
