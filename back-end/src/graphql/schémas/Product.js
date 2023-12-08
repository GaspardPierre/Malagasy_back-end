import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const productTypeDefs = gql`
  scalar DateTime

  type Product {
    id: ID!
    name: String!
    description: String!
    photoURL: String
    price: Float!
    availableQuantity: Int!
    artistID: ID!
    categoryID: ID!
    dimension: String
    weight: Float
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      name: String!, 
      description: String!,
      photoURL: String,
      price: Float!, 
      availableQuantity: Int!, 
      artistID: ID!,
      categoryID: ID!, 
      dimension: String, 
      weight: Float,
      createdAt: DateTime, 
      updatedAt: DateTime
    ): Product

    deleteProduct(id: ID!): Message

    updateProduct(
      id: ID!, 
      name: String, 
      description: String,
      photoURL: String,
      price: Float, 
      availableQuantity: Int, 
      artistID: ID,
      categoryID: ID, 
      dimension: String, 
      weight: Float,
      createdAt: DateTime, 
      updatedAt: DateTime
    ): Product
  }

  type Message {
    message: String!
  }
`;
