const db = require("./db/dbConnect");
const express = require("express");
const router = require("./router/index");
const configs = require("./configs/index");
const consts = require("./consts/index");
const middleware = require("./middleware/index");
const app = express();
app.use(express.json());
configs.serverConfig.initialServerConfig();
const PORT = process.env.PORT;

// app.use(middleware.authMiddleware);
app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.user);
app.use(`${process.env.APP_PREFIX}${consts.router.PRODUCT}`, router.product);
app.use(`${process.env.APP_PREFIX}${consts.router.CART}`, router.cart);

db.dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
