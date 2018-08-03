const _ = require("lodash")

let modifyCursor = module.exports.modifyCursor = (cursor, cursorOptions)=> {
  Object.keys(cursorOptions).forEach((option)=>{
      cursor[option](cursorOptions[option]);
  });
  return cursor;
}

let fetchOptionsFromHeaders = module.exports.fetchOptionsFromHeaders = req=> {
  return {
    db: req.headers.options.db.db(req.headers.organisation)
  };
}