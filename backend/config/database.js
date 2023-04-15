const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(process.env.db);
  console.log(`MongoDB Connected`);
};

module.exports = connect;
