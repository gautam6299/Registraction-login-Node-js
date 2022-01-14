
import express from "express";
import {join} from "path"
const app=express();

import connectdb from "./db/connectdb.js"
const url=process.env.DATABASE_URL || "mongodb://localhost:27017"
import web from "./routes/web.js"
const port=process.env.PORT || 8000;
// connect database
connectdb(url);

app.use(express.urlencoded({extended:false}))

// set routes 
app.use("/",web);



//static file
app.use(express.static(join(process.cwd(),'public')))

// set ejs
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`ServerRunning at port ${port}`);
})
