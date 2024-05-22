const router = require("express").Router();
const controller = require("../controller/index");

router.post("/addToCart", controller.cartController.addToCart);

module.exports = {
  cart: router,
};
