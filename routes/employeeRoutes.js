const express = require("express");
const employees = require("../Data/employess");
const { create, createMany, getEmp } = require("../controllers/employee.controller");
const empRouter = express.Router();

empRouter.post("/employee", create);
empRouter.post("/employees", createMany);
empRouter.get("/employees",getEmp)

module.exports = empRouter;
