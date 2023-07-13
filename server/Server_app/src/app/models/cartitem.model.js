const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_product  = require('../models/product.model');
const tbl_cart = require('../models/cart.model');

// tao bang
const CartItem  = sequelize.define('tbl_cartitem',{
     id_product:{
        type:  DataTypes.INTEGER,
        allowNull: false,
     },
     id_cart:{
          type:  DataTypes.INTEGER,
          allowNull: false,
     },
     quantity:{
          type:  DataTypes.INTEGER,
          allowNull: false,
     },
     },
     {
          timestamps: false,
     });
     CartItem.belongsTo(tbl_product, { foreignKey: 'id_product', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     CartItem.belongsTo(tbl_cart, { foreignKey: 'id_cart', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     tbl_product.hasOne(CartItem, { foreignKey: 'id_product'});
     tbl_cart.hasMany(CartItem, { foreignKey: 'id_cart'});

     CartItem.sync()
         .then(() => {
           console.log('Create table cart item successfully');
         })
         .catch((error) => {
           console.log('Error create table', error);
         });
     
     module.exports = CartItem;