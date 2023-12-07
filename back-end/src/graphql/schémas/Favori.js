import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const favoriTypeDefs = gql`
  scalar DateTime

  type Favory {
      id: ID!
      userId: ID!
      productId: ID!
      dateAddition: DateTime
  }

  type Query {
    favoris: [Favory]
      favori(userId: ID!): [Favory]
  }

  type Mutation {
      addToFavori(
          userId: ID!,
          productId: ID!
      ): Favory

      removeFromFavori(id: ID!): Favory
  }
`;
