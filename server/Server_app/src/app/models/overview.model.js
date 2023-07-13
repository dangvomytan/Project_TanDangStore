const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_product = require ('./product.model.js')

// tao bang
const OverView  = sequelize.define('tbl_overView',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     id_product:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
     content:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     },
     {
          timestamps: false,
     });
     OverView.belongsTo(tbl_product, { foreignKey: 'id_product', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     tbl_product.hasMany(OverView, { foreignKey: 'id_product'});

     OverView.sync()
       .then(() => {
         console.log('Create table OverView successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = OverView;