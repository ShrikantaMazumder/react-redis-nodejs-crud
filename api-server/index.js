"use strict"

import dotenv from 'dotenv';
import express from "express";
dotenv.config()

const app = express()

// env variables
const port = process.env.PORT || 5001;

app.listen(port, () => console.log("Server running on:", port))