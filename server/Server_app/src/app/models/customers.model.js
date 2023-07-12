const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');

//tao bang customers
const Customer = sequelize.define('tbl_Customer',{
     idCustomer:{
          type:  DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
     },
     firstName:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     lastName:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     email: {
          type:  DataTypes.STRING,
          allowNull: false,
     },
     password: {
          type:  DataTypes.STRING,
          allowNull: false,
     },
     status:{
          type:  DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1
     }
});
Customer.sync().then(() => {
     console.log('Create table customers successfully');
   })
   .catch((error) => {
     console.log('Error create table', error);
   });
   module.exports = Customer;