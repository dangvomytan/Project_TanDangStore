const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_customer = require('../models/customers.model');

// tao bang
const Cart  = sequelize.define('tbl_cart',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     id_customer:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       }
     },
     {
          timestamps: false,
     });
     Cart.belongsTo(tbl_customer, { foreignKey: 'id_customer', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     tbl_customer.hasOne(Cart,{ foreignKey: 'id_customer'});

     Cart.sync()
       .then(() => {
         console.log('Create table cart successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = Cart;