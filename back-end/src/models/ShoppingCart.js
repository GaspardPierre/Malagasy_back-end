import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class ShoppingCart extends Model {}

    ShoppingCart.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "cart_id"
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id"
            
        },
        productID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "product_id"
        },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        dateAddition: {
            type: DataTypes.DATE,
            allowNull: false

        }
    }, { sequelize, modelName: "shoppingCart" });


   export default ShoppingCart;