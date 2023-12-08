import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "user_id"
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordHash: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: { 
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  registerAt: { 
    type: DataTypes.DATE,
    allowNull: false
  },
  lastConnexion: { 
    type: DataTypes.DATE,
    allowNull: true
  },
  statutCompte: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  role: { 
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize, modelName: "user" });

export default User;
