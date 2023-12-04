import sequelize from "./src/config/db.js";
import { User, Category, Artist, Product, Address, Order, Review, Favori, NavigationHistory, ShoppingCart, Stock, Transaction, Support, Newsletter } from "./src/models/index.js";

async function initDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Création des tables dans l'ordre spécifié
    await Category.sync();
    await Artist.sync();
    await User.sync();
    await Product.sync();
    await Address.sync();
    await Order.sync();
    await Review.sync();
    await Favori.sync();
    await NavigationHistory.sync();
    await ShoppingCart.sync();
    await Stock.sync();
    await Transaction.sync();
    await Support.sync();
    await Newsletter.sync();

    console.log("All tables created successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default initDB;
