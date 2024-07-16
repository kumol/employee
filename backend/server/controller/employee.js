const Employee = require("../models/employee.model");

module.exports = {
    createNewEmployee: async (req, res, next) => {
        try {
            const newEmployee = new Employee(req.body);
            newEmployee.id = newEmployee._id;
            await newEmployee.save();
            return res.json({
                success: true, 
                statusCode: 200,
                message: "Employee created",
                body: newEmployee
            });
        } catch (err) {
            return res.json({
                success: false,
                statusCode: 501,
                message: err.message,
                body: err.stack
            });
        }
    },
    getAllEmployees: async (req, res, next) => {
        try {
            const employees = await Employee.find();
            return res.json({
                success: true, 
                statusCode: 200,
                message: "Employee created",
                body: employees
            });
        } catch (err) {
            return res.json({
                success: false,
                statusCode: 501,
                message: err.message,
                body: err.stack
            });
        }
    },
    getEmployeeById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const employee = await Employee.findById(id);
            if (!employee) {
                return res.json({
                    success: true, 
                    statusCode: 200,
                    message: "Employee not found",
                    body: employee
                });
            }
            return res.json({
                success: true, 
                statusCode: 200,
                message: "Employee created",
                body: employee
            });
        } catch (err) {
            return res.json({
                success: false,
                statusCode: 501,
                message: err.message,
                body: err.stack
            });
        }
    },

    updateEmployeeById: async (req, res, next) => {
        try {
            const  id = req.params.id, updateData = req.body;
            const employee = await Employee.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );
            if (!employee) {
                return res.json({
                    success: true, 
                    statusCode: 200,
                    message: "Employee not found",
                    body: employee
                });
            }
            return res.json({
                success: true, 
                statusCode: 200,
                message: "Employee created",
                body: employee
            });
        } catch (err) {
            return res.json({
                success: false,
                statusCode: 501,
                message: err.message,
                body: err.stack
            });
        }
    },
    deleteEmployeeById: async (req, res,next) => {
        try {
            const id = req.params.id;
            const employee = await Employee.findByIdAndDelete(id);
            if (!employee) {
                return res.json({
                    success: true, 
                    statusCode: 200,
                    message: "Employee not found",
                    body: employee
                });
            }
            return res.json({
                success: true, 
                statusCode: 200,
                message: "Employee deleted",
                body: employee
            });
        } catch (err) {
            return res.json({
                success: false,
                statusCode: 501,
                message: err.message,
                body: err.stack
            });
        }
    }
}