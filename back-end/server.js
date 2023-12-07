import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import { typeDefs } from "./src/graphql/shémas/shema.js";
import { resolvers } from "./src/graphql/resolvers/resolvers.js";
import initDB from "./initDB.js";
import bodyParser from "body-parser";
import morgan from "morgan";

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
const graphqlServer = new ApolloServer({ 
  typeDefs, 
  resolvers 
});
graphqlServer.start().then(() => {

  app.use(morgan ("combined"));
  app.use("/graphql", expressMiddleware(graphqlServer));

 

  app.use(express.json());


  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Initialisation de la base de données (si nécessaire)
  initDB();


  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});