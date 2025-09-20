const bcrypt = require("bcrypt");
const Employee = require("../models/employees.model");
const jwt=require("jsonwebtoken");
const Register = require("../models/register.model");
// const empLogin=async(req,res)=>{
//     const {email,password}=req.body
//     const emp = await Employee.findOne({ email: email });
//     if(emp){
//         const isPasswordMatch=await bcrypt.compare(password,emp.password)
//         if(isPasswordMatch){
//             res.cookie("emplyee",{name:emp.name,age:emp.age,email:emp.email,password:emp.password},{
//                 httpOnly:true,
//                 secure:false,
                
//                 maxAge: 2*24*60*60*1000            

//             })
//             res.json({
//                 message:"login successfully",
//                 data:emp
//             })
            
//         }
//     }else{
//         res.json({message:"something went wromg in credentials"})
//     }

// }



const empLogin=async(req,res)=>{
    const {email,password}=req.body
    const emp = await Register.findOne({ email: email });
    if(emp){
        const isPasswordMatch=await bcrypt.compare(password,emp.password)
        if(isPasswordMatch){
            const token=jwt.sign({data:emp},process.env.SECRET_KEY,{expiresIn:"10m" })
            if(token){
                res.json({
                message:"login successfully",
                data:emp,
                token:token
            })
            }




            
        }
    }else{
        res.json({message:"something went wromg in credentials"})
    }

}

module.exports={empLogin}