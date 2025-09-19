const { create } = require("../models/employees.model")
const Profile = require("../models/profile.model")
const Users = require("../models/users.model")


const createUser=async (req,res)=>{
    const {name,bio,website}=req.body

    const userProfile=await Profile.create({bio:bio,website:website})

    const User=await Users.create({name:name,profile:userProfile._id})
    if (User && userProfile){
        res.json({
            message:"user created successfully",
            data:User

        })
    }
    else{
        res.json({
            message:"user not created successfully",
            data:{}
        })
    }


}


const getUsers=async (req,res)=>{
    const data=await Users.find({}).populate("profile")
    res.json({
        message:"Users data",
        data:data
    })
}

module.exports={createUser,getUsers}