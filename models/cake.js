const mongoose = require("mongoose");
const { Schema } = mongoose;

const cakeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    contact: {
      type: String,
      //   match: [
      //     /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      //     "Enter a valid phone number",
      //   ],
      min: 10,
      required: true,
    },
    writingoncake: {
      type: String,
      trim: true,
    },
    shape: {
      type: String,
      trim: true,
    },
    flavour: {
      type: String,
    },
    size: {
      type: String,
      required: true,
    },
    delivery: {
      type: String,
    },
    extras: {
      type: [String],
      enum: [
        "Mini alcohol bottles",
        "Fruits",
        "Chocolates",
        "Candies",
        "Cookies",
        "Macarons",
      ],
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cake", cakeSchema);
