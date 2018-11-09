'use strict';

const config           = require(__dirname + '/../../config');
const appDir           = config.appDir;
const { to, ReE, ReS } = require(appDir + '/app/utils/utils.service');
const messageModel     = require(appDir + '/app/models/messages.model');


module.exports.getAll = async (req, res)=> {
    const options = req.app.get('options');
    let logger = options.logger;
    logger.info("inside messages controller");
    let time1 = Date.now();
    let result = await messageModel.getAll(options);
    let time2 = Date.now();
    let timetaken = time2 - time1;
    logger.info("Time difference : %s ms", String(timetaken)); 
    let message = {
        data : result,
        time_taken : String(timetaken) + " ms"
    };
    logger.info(JSON.stringify(message));
    return ReS(res, message, 200);

};