import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const navigationHistoryTypeDefs = gql`
  scalar DateTime

  type NavigationHistory {
      id: ID!
      userId: ID!
      productId: ID!
      visitedAt: DateTime
  }

  type Query {
    navigationHistories: [NavigationHistory]
      navigationHistory(userId: ID!): [NavigationHistory]
  }

  type Mutation {
      addNavigationHistory(
          userId: ID!,
          productId: ID!
      ): NavigationHistory
  }
`;
