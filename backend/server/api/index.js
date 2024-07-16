const route = require("express").Router();
const employeeRoute = require("./routes/employee");

route.use("/employee", employeeRoute);

module.exports = route;