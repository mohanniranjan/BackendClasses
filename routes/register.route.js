const express=require("express")
const { empRegister } = require("../controllers/register.controller")

const registerRouter=express.Router()
registerRouter.post("/register",empRegister)

module.exports={registerRouter}