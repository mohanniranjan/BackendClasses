const mongoose=require("mongoose")

const employees=new mongoose.Schema({
    name:{
      type:String,
      require:true
    },age:{
        type:Number,
        require:true
    },email:{
        type:String,
        require:true,

    },password:{
        type:String,
        require:true
    }
})
const Employee=mongoose.model("Emplyees",employees)
module.exports=Employee