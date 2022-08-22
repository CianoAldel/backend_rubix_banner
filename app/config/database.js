const {Sequelize} = require('sequelize');
const {DATABASE_NAME, DATABASE_USER, DATABASE_PASS,DATABASE_URL } = process.env;

console.log("process.env",process.env);
console.log("DATABASE_URL: ", DATABASE_URL);
console.log("DATABASE_USER: ", DATABASE_USER);

module.exports =  new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASS, {
    host: DATABASE_URL,
    dialect: 'postgres'
  });