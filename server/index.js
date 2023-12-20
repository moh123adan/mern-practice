import express from "express";
import dotenv from "dotenv";
import connectDB from "./mongoDB/db.js";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.port || 5000;
const URL = process.env.MONGO_URL;

connectDB(URL);

app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(port, () => console.log(`server is running on port ${port}`));
