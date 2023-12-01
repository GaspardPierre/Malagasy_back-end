const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class ShoppingCart extends Model {}

    ShoppingCart.init({
        CartID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "cart_id"
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id"
            
        },
        ProductID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "product_id"
        },
        Quantity : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        DateAddition: {
            type: DataTypes.DATE,
            allowNull: false

        }
    }, { sequelize, modelName: "shoppingCart" });


    module.exports = ShoppingCart;