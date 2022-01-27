const mongoose = require("mongoose");
const log = require("../utils/logger");

const connectDb = async () => {
  const URI = process.env.MONGO_URI;

  try {
    await mongoose.connect(URI);
    log.info("Connected to DB");
  } catch (e) {
    log.error(e.message);
    process.exit();
  }
};

module.exports = connectDb;
