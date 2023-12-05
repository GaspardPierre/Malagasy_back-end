import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Artist extends Model {}

Artist.init({
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"artist_id"
  },
  Name: {
    type : DataTypes.STRING,
    allowNull: false

  } ,

  Biography: DataTypes.STRING,

  WebSite: DataTypes.STRING,
  ProfilePhoto: DataTypes.STRING
}, { sequelize, modelName: "artist" });
    

export default Artist;
