const service = require("../service/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");

exports.addToCart = async (req, res) => {
  try {
    const product = await service.cartService.addToCart(req);
    res
      .json({
        ...baseResponse,
        message: "Sepete eklendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Sepete eklenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
