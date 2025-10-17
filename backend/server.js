import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDb } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";




// app config
const app = express();
const port = 4000;


// middleware
// using this middleware whenever we will get the request from the frontend to backend that will be passed using json
app.use(express.json()) 
// using this we can access the backend from any frontend
app.use(cors());

// db connection
connectDb();

// api endpoints
app.use("/api/user", userRouter)


app.get("/", (req, res) => {
  res.send("API working")
})


app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
})


// mongodb+srv://pricewise:pricewise.117@cluster0.yh0ehxu.mongodb.net/?