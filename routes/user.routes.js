

const express=require("express")
const { createUser, getUsers } = require("../controllers/users.controller")

const UserRouter=express.Router()

UserRouter.post("/create",createUser)
UserRouter.get("/get",getUsers)


module.exports=UserRouter