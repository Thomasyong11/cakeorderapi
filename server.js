const express = require("express");
// import express from "express";
const cors = require("cors");
// import cors from "cors";
const fs = require("fs");
// import { readdirSync } from "fs";
const mongoose = require("mongoose");
// import mongoose from "mongoose";
const morgan = require("morgan");
// import morgan from "morgan";
require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config();

//create express app

const app = express();

//dbConnection
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error =>", err));
//middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

//paste
// app.use(express.static(path.join(__dirname, "/client")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });
//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
