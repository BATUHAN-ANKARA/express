const Cart = require("../model/cart.model");
const User = require("../model/user.model");
const Product = require("../model/product.model");

exports.addToCart = async (req, res) => {
  try {
    const { userId, products } = req.body;
    // Kullanıcı var mı kontrol et
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    // Ürün var mı kontrol et ve stok kontrolü yap
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      const productInfo = await Product.findById(products[i].product);
      if (!productInfo) {
        throw new Error("Ürün bulunamadı");
      }
      if (productInfo.stock < products[i].quantity) {
        throw new Error("Stok yetersiz");
      }
      total += productInfo.price * products[i].quantity;
    }
    // Kullanıcının mevcut sepeti var mı kontrol et
    let cart = await Cart.findOne({ user: userId });
    if (cart) {
      // Sepet varsa ürünleri güncelle
      for (let i = 0; i < products.length; i++) {
        const existingProductIndex = cart.products.findIndex(
          (p) => p.product.toString() === products[i].product
        );
        if (existingProductIndex !== -1) {
          // Ürün varsa miktarı arttır
          cart.products[existingProductIndex].quantity += products[i].quantity;
        } else {
          // Ürün yoksa sepete ekle
          cart.products.push(products[i]);
        }
        // Ürün fiyatını ve toplam fiyatı güncelle
        const productInfo = await Product.findById(products[i].product);
        cart.totalPrice += productInfo.price * products[i].quantity;
      }
    } else {
      // Yeni sepet oluştur
      cart = new Cart({
        user: userId,
        products: products,
        totalPrice: total,
      });
    }
    await cart.save();
    // Stokları düşür
    for (let i = 0; i < products.length; i++) {
      const productInfo = await Product.findById(products[i].product);
      productInfo.stock -= products[i].quantity;
      await productInfo.save();
    }
    // Fişi oluştur ve geri döndür
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};
