const mongoose = require("mongoose");

console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL)
.then((v)=> console.log("db connected successfully"))
.catch(err=>console.log(err))