const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");
const utils = require("../utils/index");
const baseResponse = require("../dto/baseResponse.dto");
const service = require("../service/index");

exports.register = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const user = await service.userService.register(req);
    res
      .json({ ...baseResponse, data: user, message: "Kayıt oluşturuldu" })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kayıt oluşturulamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await service.userService.login(req);
    res
      .json({
        ...baseResponse,
        data: user,
        message: "Giriş başarılı",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Giriş yapılamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const user = await service.userService.resetPassword(req);
    res
      .json({ ...baseResponse, data: user, message: "Şifre yenilendi" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Şifre yenilenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await service.userService.updateUser(req);
    res
      .json({ ...baseResponse, data: user, message: "Güncelleme başarılı" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kullanıcı güncellenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .json({
        ...baseResponse,
        data: users,
        message: "Kullanıcılar bulundu",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kullanıcılar bulunamadı",
        error: error,
        errorMessage: error.message,
        success: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user === null || user.length === 0) {
      throw new Error("Kullanıcı bulunamadı");
    }
    res
      .json({ ...baseResponse, message: "Kullanıcı bulundu", data: user })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({ message: "Kullanıcı bulunamadı", error: error.message })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const user = await User.find({ name: name });
    if (user === null || user.length === 0) {
      throw new Error("Kullanıcı bulunamadı");
    }
    res
      .json({ message: "Kullanıcı bulundu", data: user })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({ message: "Kullanıcı bulunamadı", error: error.message })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserBySalary = async (req, res) => {
  try {
    const { salary } = req.params;
    const user = await User.find({ salary: salary });
    if (user === null || user.length === 0) {
      throw new Error("Kullanıcı bulunamadı");
    }
    res
      .json({ message: "Kullanıcı bulundu", data: user })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({ message: "Kullanıcı bulunamadı", error: error.message })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
