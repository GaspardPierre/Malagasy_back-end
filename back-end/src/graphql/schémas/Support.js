import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const supportTypeDefs = gql`
  scalar DateTime

  type Support {
      id: ID!
      userId: Int!
      subject: String!
      message: String
      statutTicket: String!
      openAt: DateTime!
      closingDate: DateTime
  }

  type Query {
      supports: [Support]
      support(id: ID!): Support
  }

  type Mutation {
      createSupportTicket(
          userId: Int!,
          subject: String!,
          message: String,
          statutTicket: String!,
          openAt: DateTime!
      ): Support

      updateSupportTicket(
          id: ID!,
          subject: String,
          message: String,
          statutTicket: String,
          closingDate: DateTime
      ): Support

      closeSupport(id: ID!): Support
  }
`;
