const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');

// tao bang user
const User  = sequelize.define('User',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     fullName:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     userName:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     password:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     role:{
          type:  DataTypes.INTEGER,
          allowNull: false,
     },
     status:{
          type:  DataTypes.INTEGER,
          allowNull: false,
     },

     },
     {
          timestamps: true,
     });
     User.sync()
       .then(() => {
         console.log('Create table user successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = User;