import gql from "graphql-tag";

export const newsletterTypeDefs = gql`
  scalar DateTime

  type Newsletter {
      id: ID!
      email: String!
      registeredAt: DateTime
  }

  type Query {
      newsletters: [Newsletter]
      newsletter(id: ID!): Newsletter
  }

  type Mutation {
      subscribeToNewsletter(
          email: String!
      ): Newsletter

      unsubscribeFromNewsletter(id: ID!): Newsletter
  }
`;
