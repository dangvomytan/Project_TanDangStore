const dev ={
db:{
     host: 'localhost',
     user: 'root',
     password:'123456',
     database: 'TanDangStore',
     dialect: 'mysql',
},
pool: {
     max: 5,
     min: 0,
     acquire: 30000,
     idle: 10000,
   },
};

module.exports = dev;