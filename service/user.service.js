const User = require("../model/user.model");
const utils = require("../utils/index");
const userResponse = require("../dto/user.dto");
const fileService = require("./file.service");

exports.register = async (req) => {
  try {
    let { name, surname, email, password, salary, birthDate } = req.body;
    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
      throw new Error("Bu email adresi ile kayıtlı kullanıcı bulunmaktadır.");
    }
    const _password = utils.helper.hashToPassword(password);
    birthDate = new Date(birthDate);
    const user = new User({
      name,
      surname,
      email,
      password: _password,
      salary,
      birthDate,
    });
    await user.save();
    const token = utils.helper.createToken(user._id, user.name, user.email);
    return {
      token,
      user,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.login = async (req) => {
  try {
    const { email, password } = req.body;
    const _password = utils.helper.hashToPassword(password);
    const user = await User.find({ email: email, password: _password });
    if (user === null || user.length === 0) {
      throw new Error("Şifre veya email hatalı");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.resetPassword = async (req) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.find({ email: email });
    if (user === null || user.length === 0) {
      throw new Error("Email hatalı");
    }
    const _password = utils.helper.hashToPassword(newPassword);
    const id = user[0]._id;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { password: _password },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateUser = async (req) => {
  try {
    const { id } = req.params;
    const { name, surname, salary } = req.body;
    const user = await User.find({ _id: id });
    if (user === null || user.length === 0) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, surname, salary },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllUsers = async (req) => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateProfilePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const str = await fileService.uploadImage(req, res);
    const json = await User.findByIdAndUpdate(
      id,
      { profilePhoto: str },
      { new: true }
    );
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
