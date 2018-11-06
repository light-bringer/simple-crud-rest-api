'use strict'

const mysql  = require('mysql');
const config = require('./index');


let connection = mysql.createPool({
    host: config.mongodb.databaseHost,
    port: config.mongodb.databasePort,
    user: config.mongodb.databaseUser,
    password: config.mysql.databasePwd,
    database: config.mysql.databaseName
});


module.exports = connection;