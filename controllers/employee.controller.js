const Employee = require("../models/employees.model");

const create=async (req,res)=>{
   const {name,age,email,password}= req.body
   const empData=await Employee.create({name:name,age:age,email:email,password:password})
   if(empData){
    res.json({
        message:"employee created successfully",
        data:empData
    })
   }else{
    res.json({
        message:"employee not created",
        data:{}
    })
   } 
}


const createMany=async (req,res)=>{
    const data=req.body
    const empData=await Employee.insertMany(data)

    if(empData.length>0){
    res.json({
        message:"employees created successfully",
        data:empData
    })    
}
else{
    res.json({
        message:"employees not created",
        data:[]
    })
   } }

const getEmp=async (req,res)=>{
    const empData=await Employee.find({})
    if(empData.length>0){
    res.json({
        message:"employees fetched successfully",
        data:empData
    })        
    }
else{
    res.json({
        message:"employees not fetched",
        data:[]
    })
   }

}

module.exports={create,createMany,getEmp}