"use strict"

import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import TodoRoute from './routes/TodoRoute.js';


dotenv.config()

const app = express()

// env variables
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(process.env.DATABASE_URL);
});

// v1 endpoints
app.use("/api/v1", TodoRoute);

app.listen(port, () => console.log("Server running on:", port))