const express = require('express')
, bodyParser = require('body-parser')
, _ = require('lodash');

const config = require(__dirname + '/config')
  , appDir = config.appDir
  , db = require(appDir + '/config/db.js')
  , app = express();
  
// app.use(busboy())

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || config.port);

app.use((req, res, next)=> {
 res.header('Access-Control-Allow-Origin', '*');
 res.header( "Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
 res.header("Access-Control-Allow-Headers", '*');
 res.header("Access-Control-Expose-Headers", "*");
 if (req.method === 'OPTIONS') {
   return res.send(200);
 }
 next();
});

db.init(function(err) {
  var server =  app.listen(app.get('port'));
  console.log('Express server listening on port ' + server.address().port);
  var options = {db: db.client};
  app.use('/', require(appDir + '/app/routes'));
  app.use(express.static(__dirname + '/public'));
})

