const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
    console.log("DB bağlantısı başarılı");
  } catch (error) {
    throw new Error("DB bağlantı hatası:", error.message);
  }
};

module.exports = {
  dbConnect,
};
