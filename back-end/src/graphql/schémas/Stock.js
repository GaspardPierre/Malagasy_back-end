import gql from "graphql-tag";

export const stockTypeDefs = gql`
  type stock {
      id: ID!
      productId: ID!
      CurrentAmount: Int!
      MinimunAmount: Int
  }

  type Query {
      stocks: [stock]
      stock(id: ID!): stock
  }

  type Mutation {
      createStock(
          productId: ID!,
          CurrentAmount: Int!,
          MinimunAmount: Int
      ): stock

      updateStock(
          id: ID!,
          CurrentAmount: Int,
          MinimunAmount: Int
      ): stock

      deleteStock(id: ID!): stock
  }
`;
