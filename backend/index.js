import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
dotenv.config();
 const app = express();
const PORT = process.env.PORT;

 app.get("/", (req, res)=>{
    res.send("Hello, World!");
 });
 connectDb();
 app.listen(3000, () => {
    console.log(`http://locahost:${PORT}`);
 });