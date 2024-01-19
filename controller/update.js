const usermodel = require("../model/user");
let updatedata = async (req, res) => {
  let data = await usermodel.findByIdAndUpdate(req.params.id,req.body);
//  let result=await usermodel.findByIdAndUpdate(data,req.body)
  res.send({
    success:true,
    message:"data successfully updated",
    data
  })
};
module.exports = updatedata;
