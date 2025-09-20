const express = require("express");
const employees = require("../Data/employess");
const { create, createMany, getAllEmp, getEmployee, upadteEmp, updateEmployees, deleteEmp, dashBoard } = require("../controllers/employee.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { empLogout } = require("../controllers/logout.controller");

const empRouter = express.Router();
const path=require("path");


empRouter.post("/employee", create);
empRouter.post("/employees", createMany);
empRouter.get("/getAll",getAllEmp)
empRouter.get('/employee/:name',getEmployee)
empRouter.get('/employee',getEmployee)
empRouter.put("/employee/:name",upadteEmp)
empRouter.put("/employees",updateEmployees)
empRouter.delete("/employee/:name",deleteEmp)

empRouter.get("/",authMiddleware,dashBoard)
empRouter.post("/logout",empLogout)


module.exports = empRouter;
