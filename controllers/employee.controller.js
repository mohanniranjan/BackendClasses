const { get } = require("mongoose");
const Employee = require("../models/employees.model");

const create = async (req, res) => {
  const { name, age, email, password } = req.body;
  const empData = await Employee.create({
    name: name,
    age: age,
    email: email,
    password: password,
  });
  if (empData) {
    res.json({
      message: "employee created successfully",
      data: empData,
    });
  } else {
    res.json({
      message: "employee not created",
      data: {},
    });
  }
};

const createMany = async (req, res) => {
  const data = req.body;
  const empData = await Employee.insertMany(data);

  if (empData.length > 0) {
    res.json({
      message: "employees created successfully",
      data: empData,
    });
  } else {
    res.json({
      message: "employees not created",
      data: [],
    });
  }
};

const getAllEmp = async (req, res) => {
  const empData = await Employee.find({});
  if (empData.length > 0) {
    res.json({
      message: "employees fetched successfully",
      data: empData,
    });
  } else {
    res.json({
      message: "employees not fetched",
      data: [],
    });
  }
};

const getEmployee = async (req, res) => {
  const name = req.params.name;
  //   const { name } = req.query;
  //   console.log(req.query)
  //   const empData = await Employee.findOne({ name: name });
  const empData = await Employee.findById(name);
  if (empData) {
    res.json({
      message: "employee fetched successfully",
      data: empData,
    });
  } else {
    res.json({
      message: "employee not fetched",
      data: {},
    });
  }
};

const upadteEmp = async (req, res) => {
  const name = req.params.name;
  const { age } = req.body;
  // const response= await Employee.updateOne({name:name},{age:age})
  const response = await Employee.findOneAndUpdate(
    { name: name },
    { age: age },
    { new: true }
  );
  if (response) {
    res.json({
      message: "employee updated successfully",
      response: response,
    });
  } else {
    res.json({
      message: "Emplopyee not updated",
      response: {},
    });
  }
};

const updateEmployees = async (req, res) => {
  const { age } = req.body;
  const response = await Employee.updateMany(
    { age: { $eq: 30 } },
    { age: age }
  );
  if (response) {
    res.json({
      message: "employees updated successfully",
      response: response,
    });
  } else {
    res.json({
      message: "Emplopyees not updated",
      response: [],
    });
  }
};

const deleteEmp = async (req, res) => {
  const name = req.params.name;
  //    const response=await Employee.deleteOne({name:name})
  const response = await Employee.findOneAndDelete({ name: name });
  if (response) {
    res.json({
      message: "employee deleted successfully",
      response: response,
    });
  } else {
    res.json({
      message: "Emplopyee not deleted",
      response: {},
    });
  }
};

const dashBoard = async (req, res) => {
  console.log(req.empData);
  const empData = req.empData;
  if (empData) {
    res.json({
      message: "welcome to dashboard",
      data: empData,
    });
  } else {
    res.json({
      message: "please login first before visting the dashboard",
    });
  }
};
module.exports = {
  create,
  createMany,
  getAllEmp,
  getEmployee,
  upadteEmp,
  updateEmployees,
  deleteEmp,
  dashBoard,
};
