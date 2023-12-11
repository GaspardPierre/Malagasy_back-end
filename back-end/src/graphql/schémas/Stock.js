import gql from "graphql-tag";

export const stockTypeDefs = gql`
  type Stock {
      id: ID!
      productId: ID!
      CurrentAmount: Int!
      MinimunAmount: Int
  }

  type Query {
      stocks: [Stock]
      stock(id: ID!): Stock
  }

  type Mutation {
      createStock(
          productId: ID!,
          CurrentAmount: Int!,
          MinimunAmount: Int
      ): Stock

      updateStock(
          id: ID!,
          CurrentAmount: Int,
          MinimunAmount: Int
      ): Stock

      deleteStock(id: ID!): Stock
  }
`;
