const route = require("express").Router();
const employeeRoute = require("./routes/employee");
const globalRoute = require("./routes/global");

route.use("/employee", employeeRoute);
route.use("/global", globalRoute);
module.exports = route;