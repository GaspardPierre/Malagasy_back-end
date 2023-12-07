import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    passwordHash: String!
    name: String!
    firstName: String!
    registerAt: String!
    lastConnexion: String
    statutCompte: String!
    role: String!
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(email: String!, passwordHash: String!, name: String!, firstName: String!, registerAt: String!, statutCompte: String!, role: String!): User
    deleteUser(id: ID!): Message
    updateUser(id: ID!, email: String, passwordHash: String, name: String, firstName: String, registerAt: String, statutCompte: String, role: String): User
  }

  type Message {
    message: String!
  }
   `; 