const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class ShoppingCart extends Model {}

    ShoppingCart.init({
        CartID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        ProductID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Quantity : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        DateAddition: {
            type: DataTypes.DATE,
            allowNull: false

        }
    }, { sequelize, modelName: "shoppingcart" });


    module.exports = ShoppingCart;