const express = require("express");
require('dotenv').config();
require("./server/models/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.listen(8080,(error)=>{
    if(error) console.log(error);
    else console.log("Server is running on port 8080")
})