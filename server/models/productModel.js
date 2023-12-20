import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    salesPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },

  {
    timestamp: true,
  }
);

export default mongoose.model("Product", productSchema);
