

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loginProject', 'postgres', 'talha123', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;