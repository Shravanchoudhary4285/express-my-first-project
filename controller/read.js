const usermodel=require('../model/user')
let readdata=async (req, res) => {
    let read = await usermodel.find();
    res.send(read);
  }
  module.exports=readdata;