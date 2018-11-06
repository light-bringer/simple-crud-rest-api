module.exports = {
    server:{
      port: 8002,
      host: '127.0.0.1'
    },
    database: {
      mongodb : {
        name : "rest",
        host : "localhost",
        port : "27017",
        user : "root",
        password : "admin",
        path : "mongodb://localhost:27017/rest"
      },
      mysql : {
        name : "rest",
        host : "localhost",
        port : "3006",
        user : "root",
        password : "admin", 
        path : "mysql://localhost:3006/rest"
      },

    },
    projectName : 'simple-crud-rest-api'
  };