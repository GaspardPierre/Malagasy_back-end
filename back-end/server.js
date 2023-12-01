const express = require("express");
const models = require("./src/models");
const sequelize = require ("./src/config/db");
const initDB = require("./initDB")

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

const app = express();
initDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
