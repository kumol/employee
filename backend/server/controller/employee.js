const Employee = require("../models/employee.model");

module.exports = {
    createNewEmployee: async (req, res, next) => {
        try {
            const newEmployee = new Employee(req.body);
            newEmployee.id = newEmployee._id;
            newEmployee.createdAt = Date.now();
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
            let {page, limit, searchText} = req.query;
            page = +page || 1, limit = +limit || 10;
            let query = searchText ? {
                $or:[{
                    name: {$regex: searchText, $options: "i"}
                },{
                    department: {$regex: searchText, $options: "i"}
                },{
                    email: {$regex: searchText, $options: "i"}
                }
            ]
            } : {};
            const employees = await Employee.find(query).sort({_id: -1}).skip((page-1) * limit).limit(limit).lean();
            const total = await Employee.countDocuments(query);
            return employees.length > 0 ?
            res.json({
                success: true, 
                statusCode: 200,
                message: "Employee list",
                body: {
                    page: page,
                    limit: limit,
                    total: total,
                    data: employees
                }
            }) : 
             res.json({
                success: true, 
                statusCode: 204,
                message: "No employees found",
                body: {
                    page: page,
                    limit: limit,
                    total: total,
                    data: employees
                }
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
                message: "Employee",
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
            updateData.updatedAt = Date.now();
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
                message: "Employee updated",
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