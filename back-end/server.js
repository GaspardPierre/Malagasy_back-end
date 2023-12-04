import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import createServer from "./src/graphqlServer.js";
import initDB from "./initDB.js";

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

const app = express();

const graphqlServer = createServer(); // Assurez-vous que cela retourne une instance d'ApolloServer
await graphqlServer.start(); // Démarrez Apollo Server

app.use(cors());
app.use(express.json());
app.use('/graphql', expressMiddleware(graphqlServer)); // Intégration avec expressMiddleware

initDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
