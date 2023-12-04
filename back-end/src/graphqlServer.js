import { ApolloServer, gql } from "@apollo/server";
import { typeDefs} from "../src/graphql/shémas/shema.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";

const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });