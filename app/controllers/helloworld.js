'use strict';

const config           = require(__dirname + '/../../config');
const appDir           = config.appDir;
const { to, ReE, ReS } = require(appDir + '/app/utils/utils.service');


const helloworld = (req, res)=> {
    let message = {
        message : "Hello World!"
    };
    return ReS(res, message, 200);
}

module.exports.helloworld = helloworld;