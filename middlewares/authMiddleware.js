const Employee = require("../models/employees.model");

const jwt=require("jsonwebtoken")

// const authMiddleware = async (req, res, next) => {
//   const employeeCookie = await req.cookies.emplyee;
//   console.log(req.cookies);
//   if (employeeCookie) {
//     const emp = await Employee.findOne({
//       email: employeeCookie.email,
//       password: employeeCookie.password,
//     });
//     if (emp) {
//       req.employee = emp;
//       next();
//     } else {
//       res.json({
//         message: "please login",
//       });
//     }
//   } else {
//     res.json({
//       message: "cookie not found",
//     });
//   }
// };




const authMiddleware = async (req, res, next) => {
  const authToken=req.headers["authorization"]
  console.log("token : ",authToken)
  const token=authToken.split(" ")[1]
  if(token){
    const data=await jwt.verify(token,process.env.SECRET_KEY)
    console.log(data)
    req.empData=data
    next()

  }else{
    res.json({
        message:"please login again"
    })
  }


 
};
module.exports = { authMiddleware };
