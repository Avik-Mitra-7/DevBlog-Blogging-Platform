import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

// Configure CORS for your React frontend
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

// Suppress the Mongoose warning
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 3001;
const URL = process.env.MONGODB_URI;

Connection(URL);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`),
);
