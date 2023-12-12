import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import { typeDefs } from "./src/graphql/schémas/schema.js";
import { resolvers } from "./src/graphql/resolvers/resolvers.js";
import initDB from "./initDB.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import authMiddleware from "./src/middleware/authMiddleware.js";
import authRoutes from "./src/auth/authRoutes.js";



const app = express();
//configuration

app.use(cors());
app.use(bodyParser.json());
app.use(morgan ("combined"));

// Apollo Server setup
const graphqlServer = new ApolloServer({ 
  typeDefs, 
  resolvers 
});
graphqlServer.start().then(() => {
app.use("/graphql", expressMiddleware(graphqlServer));
app.use(express.json());
//home
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Protected Route
app.use("/api/auth", authRoutes);
// Auth
app.use(authMiddleware);

//error catching
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
//Database initialisation
sequelize.sync({ }).then(() => {
  console.log("Database & tables created!");
});
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});