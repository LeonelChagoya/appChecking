const { Sequelize, DataTypes } = require("sequelize");
//Establish db connection
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "vach161195.$",
  port: 6000,
  database: "appCheckin",
  logging: false,
});

module.exports = { db, DataTypes };
