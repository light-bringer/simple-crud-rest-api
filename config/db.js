'use strict'


const mongodb = require('mongodb')
, config = require('./index');

var Server = mongodb.Server
, MongoClient = mongodb.MongoClient;


//console.log(Server, MongoClient);
module.exports.init = function (callback) {
  let mongoClient = new MongoClient(new Server(config.databaseHost, config.databasePort));
  mongoClient.connect( (err, mongoClient)=> {
    mongoClient.db(config.databaseName);
    module.exports.client = mongoClient;
    callback(err);
  });
}
