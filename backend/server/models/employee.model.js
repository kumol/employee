const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("Employee", employeeSchema, "employees");