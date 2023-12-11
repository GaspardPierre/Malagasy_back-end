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
    orders: [Order]
  reviews: [Review]
  shoppingCart: ShoppingCart
  transactions: [Transaction]
  navigationHistory: [NavigationHistory]
  }
  type Query {
    users: [User]
    user(id: ID!): User
    userOrders(userId: ID!): [Order]
    userReviews(userId: ID!): [Review]
    userShoppingCart(userId: ID!): ShoppingCart
    userTransactions(userId: ID!): [Transaction]
    userNavigationHistory(userId: ID!): [NavigationHistory]
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