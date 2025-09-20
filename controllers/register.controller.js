
const bcrypt = require("bcrypt");
const Register = require("../models/register.model");

const empRegister = async (req, res) => {
    const file=req.file
   
 
    
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const emp = await Register.findOne({ email: email });
  if (emp) {
    res.json({ message: "employee already existed" });
  } else {
    const empData = await Register.create({
      name: name,
      email: email,
      password: hashedPassword,
      image:file.filename
    });
    if (empData) {
      res.json({
        message: "employee registered successfully",
        data: empData,
      });
    } else {
      res.json({
        message: "employee not registered !",
        data: {},
      });
    }
  }
};

module.exports = { empRegister };
