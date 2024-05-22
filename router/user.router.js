const router = require("express").Router();
const controller = require("../controller/index");
const validator = require("../validation/index");

router.post(
  "/register",
  [validator.user.validateRegister()],
  controller.userController.register
);
router.post("/login", controller.userController.login);
router.put("/resetPassword", controller.userController.resetPassword);
router.get("/getAllUsers", controller.userController.getAllUsers);
router.get("/getUserById/:id", controller.userController.getUserById);
router.get("/getUserByName/:name", controller.userController.getUserByName);
router.get(
  "/getUserBySalary/:salary",
  controller.userController.getUserBySalary
);
router.put("/updateUser/:id", controller.userController.updateUser);

module.exports = {
  user: router,
};
