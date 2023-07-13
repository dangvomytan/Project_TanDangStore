const sequelize = require('../../libs/database/connect.db');
const { DataTypes } = require('sequelize');
const tbl_type = require('./type.model');

// tao bang
const Product = sequelize.define(
   'tbl_product',
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      id_type: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      timestamps: true,
   },
);
Product.belongsTo(tbl_type, { foreignKey: 'id_type', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
tbl_type.hasMany(Product, { foreignKey: 'id_type' });

Product.sync()
   .then(() => {
      console.log('Create table product successfully');
   })
   .catch((error) => {
      console.log('Error create table', error);
   });

module.exports = Product;
