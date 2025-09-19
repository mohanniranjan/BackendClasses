const express = require("express");
const employees = require("../Data/employess");
const { create, createMany, getAllEmp, getEmployee, upadteEmp, updateEmployees, deleteEmp } = require("../controllers/employee.controller");
const empRouter = express.Router();

empRouter.post("/employee", create);
empRouter.post("/employees", createMany);
empRouter.get("/employees",getAllEmp)
empRouter.get('/employee/:name',getEmployee)
empRouter.get('/employee',getEmployee)
empRouter.put("/employee/:name",upadteEmp)
empRouter.put("/employees",updateEmployees)
empRouter.delete("/employee/:name",deleteEmp)

module.exports = empRouter;
