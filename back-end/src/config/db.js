const Sequelize = require("sequelize");
const sequelize = new Sequelize("malagasy_db", "postgres", "sed100sm", {
    host: "localhost",
  dialect: "postgres"
});

module.exports = sequelize;