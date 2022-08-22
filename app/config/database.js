const {Sequelize} = require('sequelize');
const {DATABASE_NAME, DATABASE_USER, DATABASE_PASS,DATABASE_URL } = process.env;
// console.log(DATABASE_URL);
module.exports =  new Sequelize("rubix_banner", "supercozy", "cozy_db_123", {
    host: "db-cozy.clxgylzgj9tx.ap-southeast-1.rds.amazonaws.com",
    dialect: 'postgres'
  });