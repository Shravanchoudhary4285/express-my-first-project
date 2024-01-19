const mongoose = require("mongoose");
var userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: Number,
});
var usermodel = mongoose.model("userdata", userschema);
module.exports = usermodel;
