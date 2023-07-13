const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');

// tao bang
const Category  = sequelize.define('tbl_category',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     name:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     },
     {
          timestamps: false,
     });
       Category.sync()
         .then(() => {
           console.log('Create table category successfully');
         })
         .catch((error) => {
           console.log('Error create table', error);
         });
     
     module.exports = Category;