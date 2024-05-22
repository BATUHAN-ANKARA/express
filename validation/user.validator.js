const { body, query, param } = require("express-validator");

const UserValidator = {
  validateRegister() {
    return [
      body("birthDate").not().isEmpty().isDate(),
      body("name").not().isEmpty().isString(),
      body("surname").not().isEmpty().isString(),
      body("password").not().isEmpty().isString(),
      body("password").isLength({ min: 4, max: 8 }),
      body("email").not().isEmpty().isEmail(),
    ];
  },
  validateUpdateUser() {
    return [param("id").not().isEmpty().isMongoId()];
  },
};

module.exports = UserValidator;
