'use strict'


const mongodb = require('mongodb')
, config = require('./index');

var Server = mongodb.Server
, MongoClient = mongodb.MongoClient;

module.exports.init = function (callback) {
  let mongoClient = new MongoClient(new Server(config.mongodb.databaseHost, config.mongodb.databasePort, {w:1}));
  mongoClient.connect( (err, mongoClient)=> {
    mongoClient.db(config.mongodb.databaseName);
    module.exports.client = mongoClient;
    callback(err);
  });
}
