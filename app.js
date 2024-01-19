const express = require("express");
const app = express();
const bodyparser=require('body-parser')
var connection = require("./model/connection");
var userrouter = require("./routes/userroute");
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use("/", userrouter);
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(4000, () => {
  console.log(`server is listening on port http://localhost:4000`);
});
