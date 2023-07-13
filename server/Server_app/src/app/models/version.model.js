const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_product = require ('./product.model.js')

// tao bang
const Version  = sequelize.define('tbl_version',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     id_product:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
     name:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     quantity:{
          type:  DataTypes.INTEGER,
          allowNull: false,
     },
     price:{
          type:  DataTypes.DECIMAL,
          allowNull: false,
     },
     description:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     },
     {
          timestamps: false,
     });
     Version.belongsTo(tbl_product, { foreignKey: 'id_product', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     tbl_product.hasMany(Version, { foreignKey: 'id_product'});

     Version.sync()
       .then(() => {
         console.log('Create table version successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = Version;