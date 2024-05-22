const service = require("../service/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");

exports.createProduct = async (req, res) => {
  try {
    const product = await service.productService.createProduct(req);
    res
      .json({
        ...baseResponse,
        message: "Ürün oluşturuldu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürün oluşturulamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await service.productService.updateProduct(req);
    res
      .json({
        ...baseResponse,
        message: "Ürün güncellendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürün güncellenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const product = await service.productService.getAllProducts(req);
    res
      .json({
        ...baseResponse,
        message: "Ürünler listelendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürün listelenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await service.productService.getProductById(req);
    res
      .json({
        ...baseResponse,
        message: "Ürün bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürün bulunamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const product = await service.productService.getProductsByCategory(req);
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulunamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByName = async (req, res) => {
  try {
    const product = await service.productService.getProductByName(req);
    res
      .json({
        ...baseResponse,
        message: "Ürün bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürün bulunamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByStock = async (req, res) => {
  try {
    const product = await service.productService.getProductsByStock(req);
    res
      .json({
        ...baseResponse,
        message: "Ürün bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürün bulunamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByPrice = async (req, res) => {
  try {
    const product = await service.productService.getProductsByPrice(req);
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulunamadı",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
