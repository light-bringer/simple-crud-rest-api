'use strict';

const _         = require('lodash');
const tablename = 'users';
const config    = require(__dirname + '/../../config');
const appDir    = config.appDir;
const error     = require(appDir+ '/app/utils/errors');


/*
TABLE STRUCTURE

mysql> use rest
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+----------------+
| Tables_in_rest |
+----------------+
| messages       |
| users          |
+----------------+
2 rows in set (0.00 sec)

mysql> desc users;
+--------+--------------+------+-----+---------+-------+
| Field  | Type         | Null | Key | Default | Extra |
+--------+--------------+------+-----+---------+-------+
| uid    | int(11)      | NO   | PRI | NULL    |       |
| fname  | varchar(100) | NO   |     | NULL    |       |
| lname  | varchar(100) | NO   |     | NULL    |       |
| email  | varchar(100) | NO   | UNI | NULL    |       |
| mobile | varchar(11)  | NO   | UNI | NULL    |       |
+--------+--------------+------+-----+---------+-------+
5 rows in set (0.00 sec)


/*
**** BOOT STRAPPING THE TABLE STRUCTURE *****

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `uid` int(11) NOT NULL,
    `fname` varchar(100) NOT NULL,
    `lname` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `mobile` varchar(11) NOT NULL,
    PRIMARY KEY (`uid`),
    UNIQUE KEY `uid_UNIQUE` (`uid`),
    UNIQUE KEY `email_UNIQUE` (`email`),
    UNIQUE KEY `mobile_UNIQUE` (`mobile`),
    KEY `uid_index` (`uid`,`fname`,`lname`,`email`,`mobile`)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
   
  --
  -- Dumping data for table `users`
  --
  
  

*/


module.exports.insertOne = async (data, options)=> {

    let db = options.db;
    let logger = options.logger;
    let messageObj = {};

    if(_.isNull(data)) {
        logger.error("No Data");
        throw new Error(error.invalidData);

    }
    if(_.isNull(data.phone)) {
        logger.error("phone number cannot be NULL");
        throw new Error(invalidData);
    }
    messageObj['uid_fk'] = data.phone;

    if(_.isNull(data.name)) {
        messageObj['message'] = "";
    }
    else {
        messageObj['message'] = data.message;
    }
    let SQLQuery = 'INSERT INTO messages SET ?';
    console.log(SQLQuery)
    console.log(data)
    console.log(messageObj)

    try {
        let result = await db.query(SQLQuery, messageObj);
        logger.info("DB Queries inserted");
        logger.info(result);
        return result;

    }
    catch(err) {
        if(err) {
            logger.error(err);
            throw new Error(error.invalidSQL);
        }
    }
}





module.exports.getAll = async (options)=> {
    let db = options.db;
    let logger = options.logger;

    const SQLQuery = "SELECT * FROM " + tablename;
    let result = await db.query(SQLQuery);
    logger.info("Records fetched from Table");
    console.log(result);
    let result_list = [];
    for (let i=0; i< result.length; i++) {
        result_list.push(result[i]);
    }

    return result_list;
}