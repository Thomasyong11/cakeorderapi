// import mongoose from "mongoose";
const { model } = require("mongoose");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const cupCakeSchema = new Schema(
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
    flavour: {
      type: String,
      required: true,
    },
    numberOfOrders: {
      type: String,
      required: true,
    },
    flavour: {
      type: String,
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
module.exports = mongoose.model("CupCake", cupCakeSchema);
