//Requiring dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
const app = express();

import pokeRoutes from "./routes/pokemon.js";
//middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use("/", pokeRoutes);

//connecting to database
mongoose.connect(process.env.CONNECTIONURL)
    .then(() => app.listen(5000))
    .catch((err) => console.log(err.message));