const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Schema.Types.Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true, autoIndex: true, minimize: true }
);

const Cart = mongoose.model("Cart", cartSchema, "cart");

module.exports = Cart;
