//Requiring dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const app = express();
//middleware
app.use(cors());

//connecting to database
mongoose.connect(process.env.CONNECTIONURL)
    .then(() => app.listen(3000))
    .catch((err) => console.log(err.message));