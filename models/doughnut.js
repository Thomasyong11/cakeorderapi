// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const doughnutSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    contact: {
      type: String,
      min: 10,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    delivery: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Doughnut", doughnutSchema);
