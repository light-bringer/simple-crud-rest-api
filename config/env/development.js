module.exports = {
    server:{
      port: 8002,
      host: '127.0.0.1'
    },
    database: {
      name: "test",
      host: "localhost",
      port: "27017",
      path : () =>{
          return "mongodb://" + this.database.host + ":" + this.database.port;
        }
    },
    projectName : 'barebone-node-api-server'
  };