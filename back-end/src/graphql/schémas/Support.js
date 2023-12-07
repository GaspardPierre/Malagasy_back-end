import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const supportTypeDefs = gql`
  scalar DateTime

  type support {
      id: ID!
      userId: Int!
      subject: String!
      message: String
      statutTicket: String!
      openAt: DateTime!
      closingDate: DateTime
  }

  type Query {
      supports: [support]
      support(id: ID!): support
  }

  type Mutation {
      createSupportTicket(
          userId: Int!,
          subject: String!,
          message: String,
          statutTicket: String!,
          openAt: DateTime!
      ): support

      updateSupportTicket(
          id: ID!,
          subject: String,
          message: String,
          statutTicket: String,
          closingDate: DateTime
      ): support

      closeSupport(id: ID!): support
  }
`;
