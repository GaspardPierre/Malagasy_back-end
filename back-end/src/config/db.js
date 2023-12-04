import Sequelize from "sequelize";

const sequelize = new Sequelize("malagasy_db", "postgres", "sed100sm", {
    host: "localhost",
    dialect: "postgres"
});

export default sequelize;
