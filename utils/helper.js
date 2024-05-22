const md5 = require("md5");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const jsonwebtoken = require("jsonwebtoken");

const hashToPassword = (password) => {
  return md5(password);
};

const handleValidation = (req) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty() === false) {
    return {
      message: "Geçersiz veri",
      success: false,
      error: true,
      validationErrors: validationErrors.array(),
      code: StatusCodes.BAD_REQUEST,
      timestamp: Date.now(),
    };
  }
  return null;
};

const createToken = (userId, name, email) => {
  const token = jsonwebtoken.sign(
    { userId, name, email },
    process.env.SECRET_KEY,
    { expiresIn: "1h", issuer: "localhost" }
  );
  return token;
};

const verifyToken = (token) => {
  const isVerify = { decodeToken: null };
  try {
    isVerify.decodeToken = jsonwebtoken.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    isVerify.decodeToken = null;
    console.log("token verify hatası:", error.message);
  }
  return isVerify;
};

module.exports = {
  hashToPassword,
  handleValidation,
  createToken,
  verifyToken,
};
