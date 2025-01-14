const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: false,
    },
    surname: {
      type: Schema.Types.String,
      required: false,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: false,
    },
    salary: {
      type: Schema.Types.Number,
      required: false,
    },
    birthDate: {
      type: Schema.Types.Date,
      required: false,
    },
    profilePhoto: {
      type: Schema.Types.String,
      required: false,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
