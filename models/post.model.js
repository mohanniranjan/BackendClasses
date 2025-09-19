const mongoose=require("mongoose")


const posts= new mongoose.Schema({
    name:{
        type:String
    },
    post_name:{
        type:String

    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    }]

})

const Posts=mongoose.model("Posts",posts)
module.exports=Posts