const mongoose=require("mongoose")

const register=new mongoose.Schema({
  name:{
    type:String
  }  ,
    email:{
        type:String

    },
        password:{
            type:String
        },image:{
            type:String
        }
    
  }
)

const Register=mongoose.model("Register",register)
module.exports=Register