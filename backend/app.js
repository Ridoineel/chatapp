const express = require("express");
const fs = require("fs");
const ent = require("ent");
const cors = require("cors");

var app = express()

app.use(cors());
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.status(200).json({d: 2});
})

module.exports = app;
