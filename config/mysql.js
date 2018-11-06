'use strict'

const mysql  = require('mysql');
const config = require('./index');


let connection = mysql.createPool({
    // connectionLimit : 1000,
    // connectTimeout  : 60 * 60 * 1000,
    // aquireTimeout   : 60 * 60 * 1000,
    // timeout         : 60 * 60 * 1000,
    host            : config.mysql.databaseHost,
    port            : config.mysql.databasePort,
    user            : config.mysql.databaseUser,
    password        : config.mysql.databasePwd,
    database        : config.mysql.databaseName
});


module.exports = connection;