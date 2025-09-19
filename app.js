const express=require("express")
const empRouter=require("./routes/employeeRoutes")

const dotenv=require("dotenv")
const DBconnection = require("./configuration/db.config")
const UserRouter = require("./routes/user.routes")
const { postsRouter } = require("./routes/posts.routes")
dotenv.config()


const app=express()


app.use(express.json())

const connect=async ()=>{
    try{
        await DBconnection()
        console.log("data base synched successfully")

    }catch(error){
        console.log("database not connected")

    }
}

connect()
const middleware=(req,res,next)=>{
console.log("middleware is running")
next()
}
app.use(middleware)

// app.use("/users",middleware,empRouter)

app.use("/Users",UserRouter)
app.use("/posts",postsRouter)



app.listen(3500,()=>{
    console.log("server is runing at http://localhost:3500")
})