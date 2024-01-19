const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/BackendApi3")
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
