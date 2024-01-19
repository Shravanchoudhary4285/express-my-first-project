const usermodel=require('../model/user')
let deletedata=async(req,res)=>{
    let deletedata=await usermodel.findByIdAndDelete(req.params.id)
    res.send({
        success:true,
        message:"Data deleted successfully",
        deletedata})
    }
module.exports=deletedata;