const usermodel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
let cretedata = async (req, res) => {
  let Hash = await bcrypt.hash(req.body.password, 10);
  let userdata = await usermodel.create({
    name: req.body.name,
    email: req.body.email,
    password: Hash,
  });
  let token = jwt.sign(
    { email: userdata.email, password: userdata.password },
    process.env.secret_key,
    { expiresIn: "1m" }
  );

  res.send({
    success: true,
    message: "Data is Successfuly created",
    userdata,
    token: token,
  });
};

module.exports = cretedata;
