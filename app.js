const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config(); 
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const uuid= require('uuid/v1');

// Db connection
mongoose
  .connect(process.env.DATABASE, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
  })
  .then(() => {
    console.log("DB CONNECTED"); 
  });

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My routes
app.use("/api", authRoutes);

// port
const port = process.env.PORT || 8000;

// starting server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
