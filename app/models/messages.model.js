'use strict';

const _         = require('lodash');
const dedent    = require('dedent');
const tablename = 'messages';


/*
TABLE STRUCTURE

mysql> desc messages;
+---------+---------+------+-----+---------+----------------+
| Field   | Type    | Null | Key | Default | Extra          |
+---------+---------+------+-----+---------+----------------+
| mid     | int(11) | NO   | PRI | NULL    | auto_increment |
| message | text    | YES  | MUL | NULL    |                |
| uid_fk  | int(11) | YES  |     | NULL    |                |
+---------+---------+------+-----+---------+----------------+
3 rows in set (0.00 sec)
*/


module.exports.insert = (data)=> {
    if(_.isNull(data)) {
        console.error("No Data");
    }
    Object.keys(d)
    
    let SQLQuery = "INSERT INTO messages";
    
}


module.exports.getAll = (options)=> {
    let db = options.db;
    let logger = options.logger;
}