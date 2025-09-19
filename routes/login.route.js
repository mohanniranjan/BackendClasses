const express=require("express")
const { empLogin } = require("../controllers/login.controller")

const empLoginRouter=express.Router()
empLoginRouter.post("/login",empLogin)

module.exports={empLoginRouter}