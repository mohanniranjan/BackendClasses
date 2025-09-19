const mongoose=require("mongoose")

const comments=new mongoose.Schema({
    comment:{
        type:String
    },
    posts:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"Posts"
    }

})

const Comments=mongoose.model("Comments",comments)
module.exports=Comments

