import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Favori extends Model {}

Favori.init({
    id: {
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

export default Favori;   