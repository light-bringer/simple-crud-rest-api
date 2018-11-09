'use strict';

const _         = require('lodash');
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

/*
**** BOOT STRAPPING THE TABLE STRUCTURE *****

mysql> use rest;
Database changed
mysql> CREATE TABLE `messages` (
    -> `mid` int(11) AUTO_INCREMENT,
    -> `message` text,
    -> `uid_fk` int(11),
    -> PRIMARY KEY (`mid`)
    -> );
Query OK, 0 rows affected (0.60 sec)

mysql> show tables;
+----------------+
| Tables_in_rest |
+----------------+
| messages       |
+----------------+
1 row in set (0.01 sec)

mysql> desc messages;
+---------+---------+------+-----+---------+----------------+
| Field   | Type    | Null | Key | Default | Extra          |
+---------+---------+------+-----+---------+----------------+
| mid     | int(11) | NO   | PRI | NULL    | auto_increment |
| message | text    | YES  |     | NULL    |                |
| uid_fk  | int(11) | YES  |     | NULL    |                |
+---------+---------+------+-----+---------+----------------+
3 rows in set (0.03 sec)

mysql> CREATE INDEX message_index ON messages(message, uid_fk);
ERROR 2006 (HY000): MySQL server has gone away
No connection. Trying to reconnect...
Connection id:    15
Current database: rest

ERROR 1170 (42000): BLOB/TEXT column 'message' used in key specification without a key length
mysql> mysql> CREATE INDEX message_index ON messages(message(200), uid_fk);
Query OK, 0 rows affected (0.36 sec)
Records: 0  Duplicates: 0  Warnings: 0

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


module.exports.getAll = async (options)=> {
    let db = options.db;
    let logger = options.logger;

    const SQLQuery = "SELECT * FROM " + tablename;
    logger.info("Records fetched from Table");
    let result = await db.query(SQLQuery);
    let result_list = [];
    for (let i=0; i< result_list.length; i++) {
        result_list.push(result[i]);
    }

    return result_list;
}