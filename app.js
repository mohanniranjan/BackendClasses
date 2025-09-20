const express=require("express")

const cookieParser=require("cookie-parser")
const dotenv=require("dotenv")
const DBconnection = require("./configuration/db.config")
const UserRouter = require("./routes/user.routes")
const { postsRouter } = require("./routes/posts.routes")
const { registerRouter } = require("./routes/register.route")
const { empLoginRouter } = require("./routes/login.route")
const empRouter = require("./routes/employeeRoutes")
const path=require("path")
const cors=require("cors")
dotenv.config()


const app=express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/uploads",express.static(path.join(__dirname,"uploads")))
const connect=async ()=>{
    try{
        await DBconnection()
        console.log("data base synched successfully")

    }catch(error){
        console.log("database not connected")

    }
}

connect()


app.use("/employee",empRouter)
app.use("/employee/dashboard",empRouter)
app.use("/Users",UserRouter)
app.use("/posts",postsRouter)
app.use("/v1/employee",registerRouter)
app.use("/v1/employee",empLoginRouter)
app.use("/v1/employee",empRouter)



app.listen(3500,()=>{
    console.log("server is runing at http://localhost:3500")
})