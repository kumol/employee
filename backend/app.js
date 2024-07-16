const express = require("express");
require('dotenv').config();
require("./server/models/db");
const route = require("./server/api/index");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use("/api",route);
app.listen(8080,(error)=>{
    if(error) console.log(error);
    else console.log("Server is running on port 8080")
})