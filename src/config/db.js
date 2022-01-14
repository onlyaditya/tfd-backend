const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("https//localhost:49.37.76.111/32");
};

module.exports = { connect };
