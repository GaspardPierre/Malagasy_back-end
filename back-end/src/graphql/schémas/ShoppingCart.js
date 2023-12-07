import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";


export const shoppingCartTypeDefs = gql`
  scalar DateTime

  type ShoppingCart {
      id: ID!
      userId: ID!
      productId: ID!
      quantity: Int!
      dateAddition: DateTime!
  }

  type Query {
    shoppingCarts: [ShoppingCart]
      shoppingCart(userId: ID!): [ShoppingCart]
  }

  type Mutation {
      addToCart(
          userId: ID!,
          productId: ID!,
          quantity: Int!
      ): ShoppingCart

      updateCart(
          id: ID!,
          quantity: Int
      ): ShoppingCart

      removeFromCart(id: ID!): ShoppingCart
  }
`;
