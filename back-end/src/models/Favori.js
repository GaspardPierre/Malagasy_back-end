const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Favori extends Model {}

Favori.init({
    FavoriID: {
        type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field :"favori_id"
    },
    UserId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id"
    },
    DateAddition : DataTypes.DATE
},  { sequelize, modelName: "favori" });    

module.exports = Favori;    