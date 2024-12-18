import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.routes.js";
import userAuth from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import lisitngRouter from './routes/listing.routes.js'

mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to MongoDB!!");
})
.catch((err) => {
  console.log(err);
});

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(5000, () => {
  console.log("App listening on port 5000...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", userAuth);
app.use("/api/listing", lisitngRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
