import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";


const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");
const Order = require("./Order");
const Review = require("./Review");
const ShoppingCart = require("./ShoppingCart");
const Transaction = require("./Transaction");
const NavigationHistory = require("./NavigationHistory");
const Address = require("./Address");
const Support = require("./Support");
const Favori = require("./Favori");
const Artist = require("./Artist");
const Stock = require("./Stock");
const Newsletter = require("./Newsletter");

User.hasMany(Order, { foreignKey: "UserID" });
Order.belongsTo(User, { foreignKey: "UserID" });
User.hasMany(Review, { foreignKey: "UserID" });
Review.belongsTo(User, { foreignKey: "UserID" });
User.hasMany(ShoppingCart, { foreignKey: "UserID" });
ShoppingCart.belongsTo(User, { foreignKey: "UserID" });
User.hasMany(Transaction, { foreignKey: "UserID" });
Transaction.belongsTo(User, { foreignKey: "UserID" });
User.hasMany(NavigationHistory, { foreignKey: "UserID" });
NavigationHistory.belongsTo(User, { foreignKey: "UserID" });
User.hasMany(Address, { foreignKey: "UserID" });
Address.belongsTo(User, { foreignKey: "UserID" });
User.hasMany(Support, { foreignKey: "UserID" });
Support.belongsTo(User, { foreignKey: "UserID" });
User.hasMany(Favori, { foreignKey: "UserID" });
Favori.belongsTo(User, { foreignKey: "UserID" });
Artist.hasMany(Product, { foreignKey: "ArtistID" });
Review.belongsTo(Product, { foreignKey: "ProductID" });

// Association avec ShoppingCart
Product.hasMany(ShoppingCart, { foreignKey: "ProductID" });
ShoppingCart.belongsTo(Product, { foreignKey: "ProductID" });

// Association avec Favoris
Product.hasMany(Favori, { foreignKey: "ProductID" });
Favori.belongsTo(Product, { foreignKey: "ProductID" });

// Association avec NavigationHistory
Product.hasMany(NavigationHistory, { foreignKey: "ProductID" });
NavigationHistory.belongsTo(Product, { foreignKey: "ProductID" });

// Association avec Stock
// Supposant que chaque Product a un enregistrement unique dans Stock
Product.hasOne(Stock, { foreignKey: "ProductID" });
Stock.belongsTo(Product, { foreignKey: "ProductID" });
Product.belongsTo(Artist, { foreignKey: "ArtistID" });

Category.hasMany(Product, { foreignKey: "CategoryID" });
Product.belongsTo(Category, { foreignKey: "CategoryID" });
Product.hasMany(Review, { foreignKey: "ProductID" });


Order.hasMany(Transaction, { foreignKey: "OrderID" });
Transaction.belongsTo(Order, { foreignKey: "OrderID" });
Order.belongsTo(Address, { foreignKey: "AddressLivraisonID" });




export {
  User,
  Order,
  Review,
  ShoppingCart,
  Transaction,
  NavigationHistory,
  Address,
  Support,
  Favori,
  Artist,
  Product,
  Category,
  Stock,
  Newsletter
};





