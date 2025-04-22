// backend/config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('goldkeys', 'ADMIN', 'ESOTILIN', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Para no ver los logs de SQL en consola
});

module.exports = sequelize;