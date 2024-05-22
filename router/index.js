const userRouter = require("./user.router").user;
const productRouter = require("./product.router").product;
const cartRouter = require("./cart.router").cart;

module.exports = {
  user: userRouter,
  product: productRouter,
  cart: cartRouter,
};
