const express = require("express");
var router = express.Router();
var usercontroller = require("../controller/create");
var readcontroller = require("../controller/read");
var deletecontroller = require("../controller/delete");
var updatecontroller = require("../controller/update");

router.get("/", (req, res) => {
  res.send("this is Home page");
});

router.post("/create", usercontroller);

router.get("/read", readcontroller);

router.put("/update/:id",updatecontroller)

router.delete("/delete/:id", deletecontroller);

module.exports = router;
