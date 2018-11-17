'use strict'

const express    = require('express');
const bodyParser = require('body-parser');
const _          = require('lodash');
const config     = require(__dirname + '/config');
const appDir     = config.appDir;
const logger     = require(appDir + '/config' + '/loggerconfig');
const db         = require(appDir + '/config/mysql.js');
const v1         = require(appDir + '/routes/v1');
const app        = express();


// init() logger
let loggerObj;
logger.init();
loggerObj = logger.loggerObj;

//loggerObj.error(JSON.stringify(process.env));
  
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
  extended: true
}));
app.set('port', process.env.PORT || config.port);

app.use((req, res, next)=> {
  // allow CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header( "Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", '*');
  res.header("Access-Control-Expose-Headers", "*");
  if (req.method === 'OPTIONS') {
    return res.send(200);
  }
  next();
});


/*
// MongoDB server connection init()
db.init(function(err) {
  var server =  app.listen(app.get('port'));
  console.log('Express server listening on port ' + server.address().port);
  var options = {db: db.client};
  app.use('/', require(appDir + '/routes'));
  app.use(express.static(__dirname + '/public'));
})
*/
let options =  {
  db : db,
  logger : loggerObj
};

app.set('options', options);
app.use('/v1', v1);
app.use(express.static(__dirname + '/public'));



var server =  app.listen(app.get('port'));
console.log('Express server listening on port ' + server.address().port);