const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_vesion  = require ('./version.model')

// tao bang
const Images  = sequelize.define('tbl_images',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     version_id:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
     url:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     lolor:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     },
     {
          timestamps: false,
     });
     Images.belongsTo(tbl_vesion, { foreignKey: 'version_id', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });
     tbl_vesion.hasMany(Images, { foreignKey: 'version_id'});

     Images.sync()
       .then(() => {
         console.log('Create table Images successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = Images;