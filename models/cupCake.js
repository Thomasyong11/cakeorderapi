// import mongoose from "mongoose";
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
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CupCake", cupCakeSchema);
