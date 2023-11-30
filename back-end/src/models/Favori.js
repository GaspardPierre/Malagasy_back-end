const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Favori extends Model {}

Favori.init({
    FavoriID: {
        type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserId :{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    DateAddition : DataTypes.DATE
},  { sequelize, modelName: "favori" });    

module.exports = Favori;    