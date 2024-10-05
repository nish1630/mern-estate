import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from './routes/user.routes.js';
import userAuth from './routes/auth.routes.js';

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

app.listen(5000, () => {
  console.log("App listening on port 5000...");
});

app.use('/api/user', userRouter);
app.use('/api/user', userAuth);