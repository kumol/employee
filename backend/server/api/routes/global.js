const route = require("express").Router();
const upload = require("../../services/global");
route.post("/upload", upload.single("image"), (req, res, next)=>{
    return res.json({
        success: true,
        statusCode: 200,
        body: req.file.path
    })
});
module.exports = route;