import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const transactionTypeDefs = gql`
  scalar DateTime

  type transaction {
      id: ID!
      amount: Float!
      userId: ID!
      OrderId: ID!
      paymentMeans: String
      status: String
      transactionDate: DateTime
  }

  type Query {
      transactions: [transaction]
      transaction(id: ID!): transaction
  }

  type Mutation {
      createTransaction(
          amount: Float!,
          userId: ID!,
          OrderId: ID!,
          paymentMeans: String,
          status: String,
          transactionDate: DateTime
      ): transaction

      updateTransaction(
          id: ID!,
          amount: Float,
          status: String,
          transactionDate: DateTime
      ): transaction
  }
`;
