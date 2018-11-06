'use strict';


const express              = require('express');
const config               = require( '../config');
const appDir               = config.appDir;
const router               = express.Router();
const HelloWorldController = require(appDir + '/app/controllers/helloworld');


// GET : HomePage
router.get('/',  HelloWorldController.helloworld);

module.exports = router;