const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_customer = require('../models/customers.model');
const tbl_products = require('../models/product.model');

// tao bang
const Order  = sequelize.define('tbl_oder',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     id_product:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
       id_customer:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
       quantity:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
       total:{
          type:  DataTypes.DECIMAL,
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
     Order.belongsTo(tbl_customer, { foreignKey: 'id_customer', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     Order.belongsTo(tbl_products, { foreignKey: 'id_product', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     tbl_customer.hasMany(Order,{ foreignKey: 'id_customer'});
     tbl_products.hasMany(Order,{foreignKey: 'id_customer'});

     Order.sync()
       .then(() => {
         console.log('Create table order successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = Order;