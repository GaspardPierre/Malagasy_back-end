import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    passwordHash: String!
    name: String!
    firstName: String!
    registerAt: String!
    lastConnexion: String!
    statutCompte: String!
    role: String!
  }
   `; 