

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ProjectName', 'postgres', 'Password', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;
