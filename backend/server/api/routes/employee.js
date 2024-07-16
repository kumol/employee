const route = require("express").Router();
const employeeController = require("../../controller/employee");
route.get("/", employeeController.getAllEmployees);
route.post("/", employeeController.createNewEmployee);
route.get("/:id", employeeController.getEmployeeById);
route.patch("/:id", employeeController.updateEmployeeById);
route.delete("/:id", employeeController.deleteEmployeeById);

module.exports = route;