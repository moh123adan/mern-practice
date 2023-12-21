import express from "express";
import dotenv from "dotenv";
import connectDB from "./mongoDB/db.js";
import productRouter from "./routes/productRoutes.js";
dotenv.config();
import cors from "cors";

const app = express();
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.port || 5000;
const URL = process.env.MONGO_URL;

connectDB(URL);

app.get("/", (req, res) => {
  res.send("hello server");
});

app.use("/uploads", express.static("uploads/"));

app.use("/products", productRouter);

app.listen(port, () => console.log(`server is running on port ${port}`));
