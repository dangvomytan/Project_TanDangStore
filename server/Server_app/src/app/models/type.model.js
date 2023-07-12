const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');
const tbl_category = require ('./category.model')

// tao bang
const Type  = sequelize.define('tbl_type',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     id_category:{
          type:  DataTypes.INTEGER,
          allowNull: false,
       },
     name:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     },
     {
          timestamps: false,
     });
     Type.belongsTo(tbl_category, { foreignKey: 'id_category', onDelete: 'CASCADE',onUpdate: 'CASCADE'  });


     Type.sync()
       .then(() => {
         console.log('Create table type successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = Type;