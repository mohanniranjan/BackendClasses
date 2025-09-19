const Employee = require("../models/employees.model");
const bcrypt = require("bcrypt");

const empRegister = async (req, res) => {
  const { name, age, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const emp = await Employee.findOne({ email: email });
  if (emp) {
    res.json({ message: "employee already existed" });
  } else {
    const empData = await Employee.create({
      name: name,
      age: age,
      email: email,
      password: hashedPassword,
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
