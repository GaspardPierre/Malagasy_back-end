import gql from "graphql-tag";

export const reviewTypeDefs = gql`
  type Review {
      id: ID!
      rating: Int!
      comment: String
      productId: ID!
      userId: ID!
  }

  type Query {
      reviews: [Review]
      review(id: ID!): Review
  }

  type Mutation {
      createReview(
          rating: Int!,
          comment: String,
          productId: ID!,
          userId: ID!
      ): Review

      updateReview(
          id: ID!,
          rating: Int,
          comment: String
      ): Review

      deleteReview(id: ID!): Review
  }
`;
