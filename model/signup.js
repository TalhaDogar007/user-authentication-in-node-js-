
const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../database');

const User = sequelize.define('User', {
   
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, 
{
   
});



module.exports = User;
  