const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_type = require ('./type.model')

// tao bang
const Brand  = sequelize.define('tbl_brand',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     id_type:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
     name:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     image:{
          type:  DataTypes.TEXT,
          allowNull: false,
     },
     },
     {
          timestamps: false,
     });
     Brand.belongsTo(tbl_type, { foreignKey: 'id_type', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });


     Brand.sync()
       .then(() => {
         console.log('Create table brand successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = Brand;