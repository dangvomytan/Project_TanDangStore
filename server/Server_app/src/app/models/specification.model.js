const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_version = require ('./version.model')

// tao bang
const Specification  = sequelize.define('tbl_specification',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     id_version:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
     ios:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     camera:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     gimble:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     flightPerformance:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     battery:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     connect:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     general:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     sensor:{
          type:  DataTypes.TEXT,
          allowNull: true,
     },
     },
     {
          timestamps: false,
     });
     Specification.belongsTo(tbl_version, { foreignKey: 'id_version', onDelete: 'CASCADE',onUpdate: 'CASCADE'});
     tbl_version.hasMany(Specification,{foreignKey: 'id_version'});
     Specification.sync()
       .then(() => {
         console.log('Create table specification successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = Specification;