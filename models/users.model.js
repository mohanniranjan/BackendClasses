const mongoose=require("mongoose")

const users=new mongoose.Schema({
  name:{
    type:String,
    require:true
  }  ,
  profile:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Profile"

  }
})

const Users=mongoose.model("Users",users)
module.exports=Users