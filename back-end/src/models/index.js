import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";
import User from "./User.js";
import Favori from "./Favori.js";
import Newsletter from "./Newsletter.js";
import Product from "./Product.js";
import Artist from "./Artist.js";
import ShoppingCart from"./ShoppingCart.js";
import Order from "./Order.js";
import Support from "./Support.js";
import Stock from "./Stock.js";
import Review from "./Review.js";
import Address from "./Address.js";
import Category from "./Category.js";
import NavigationHistory from "./NavigationHistory.js";
import Transaction from "./Transaction.js";
import OrderItem from "./OrderItem.js";



Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(ShoppingCart, { foreignKey: "user_id" });
ShoppingCart.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Transaction, { foreignKey: "user_id" });
Transaction.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(NavigationHistory, { foreignKey: "user_id" });
NavigationHistory.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Address, { foreignKey: "user_id" });
Address.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Support, { foreignKey: "user_id" });
Support.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Favori, { foreignKey: "user_id" });
Favori.belongsTo(User, { foreignKey: "user_id" });
Artist.hasMany(Product, { foreignKey: "artist_id" });
Review.belongsTo(Product, { foreignKey: "product_id" });

// Association avec ShoppingCart
Product.hasMany(ShoppingCart, { foreignKey: "product_id" });
ShoppingCart.belongsTo(Product, { foreignKey: "product_id" });

// Association avec Favoris
Product.hasMany(Favori, { foreignKey: "product_id" });
Favori.belongsTo(Product, { foreignKey: "product_id" });

// Association avec NavigationHistory
Product.hasMany(NavigationHistory, { foreignKey: "product_id" });
NavigationHistory.belongsTo(Product, { foreignKey: "product_id" });

// Association avec Stock
// Supposant que chaque Product a un enregistrement unique dans Stock
Product.hasOne(Stock, { foreignKey: "product_id" });
Stock.belongsTo(Product, { foreignKey: "product_id" });
Product.belongsTo(Artist, { foreignKey: "artist_id" });

Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });
Product.hasMany(Review, { foreignKey: "product_id" });


Order.hasMany(Transaction, { foreignKey: "order_id" });
Transaction.belongsTo(Order, { foreignKey: "order_id" });
Order.belongsTo(Address, { foreignKey: "address_id" });




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
  Newsletter,
  OrderItem
};





