const mongoose=require("mongoose")


const profile=new mongoose.Schema({
  bio:{
    type:String,
    require:true

  },
  website:{
    type:String,
    require:true
  }

})

const Profile=mongoose.model("Profile",profile)

module.exports=Profile