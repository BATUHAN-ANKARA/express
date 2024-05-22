const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likedSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    minimize: true,
  }
);

const Liked = mongoose.model("Liked", likedSchema, "liked");

module.exports = Liked;