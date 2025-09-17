const mongoose=require("mongoose")
const DBconnection=async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
       console.log("data base connected")
    }catch(error){
        console.log("error in database connection:",error)

    }

}

module.exports=DBconnection