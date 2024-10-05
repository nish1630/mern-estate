import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from './routes/user.routes.js'

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(5000, () => {
  console.log("App listening on port 5000...");
});

app.use('/api/user', userRouter);