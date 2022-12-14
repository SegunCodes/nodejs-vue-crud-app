import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//PORT
app.listen(5000, () => {
  console.log("Server running successfully");
});