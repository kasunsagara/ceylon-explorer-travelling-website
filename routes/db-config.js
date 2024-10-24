const sql = require("mysql");
const dotenv = require("dotenv").config();
const db = sql.createConnection({
    host :"localhost",
    user: "root",
    password:"",
    database:"project"
})

module.exports = db;