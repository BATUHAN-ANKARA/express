const router = require("express").Router();
const controller = require("../controller/index");

router.post("/createProduct", controller.productController.createProduct);
router.post("/updateProduct/:id", controller.productController.updateProduct);
router.get("/getAllproducts", controller.productController.getAllProducts);
router.get("/getProductById/:id", controller.productController.getProductById);
router.get(
  "/getProductByName/:name",
  controller.productController.getProductByName
);
router.get(
  "/getProductsByCategory/:category",
  controller.productController.getProductsByCategory
);
router.get(
  "/getProductsByPrice/:price",
  controller.productController.getProductsByPrice
);
router.get(
  "/getProductsByStock/:stock",
  controller.productController.getProductsByStock
);

module.exports = {
  product: router,
};
