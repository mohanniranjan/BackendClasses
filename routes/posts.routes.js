const express=require("express")
const { createPost } = require("../controllers/posts.controller")
const postsRouter=express.Router()

postsRouter.post("/create",createPost)

module.exports={postsRouter}