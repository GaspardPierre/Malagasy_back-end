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
  name: {
    type : DataTypes.STRING,
    allowNull: false

  } ,

  biography: DataTypes.STRING,

  webSite: DataTypes.STRING,
  profilePhoto: DataTypes.STRING
}, { sequelize, modelName: "artist" });
    

export default Artist;
