const {Sequelize} = require('sequelize');
const {DATABASE_NAME, DATABASE_USER, DATABASE_PASS,DATABASE_URL } = process.env;

module.exports =  new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASS, {
    host: DATABASE_URL,
    dialect: 'postgres'
  });