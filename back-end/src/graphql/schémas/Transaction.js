import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const transactionTypeDefs = gql`
  scalar DateTime

  type Transaction {
      id: ID!
      amount: Float!
      userId: ID!
      OrderId: ID!
      paymentMeans: String
      status: String
      transactionDate: DateTime
  }

  type Query {
      transactions: [Transaction]
      transaction(id: ID!): Transaction
  }

  type Mutation {
      createTransaction(
          amount: Float!,
          userId: ID!,
          OrderId: ID!,
          paymentMeans: String,
          status: String,
          transactionDate: DateTime
      ): Transaction

      updateTransaction(
          id: ID!,
          amount: Float,
          status: String,
          transactionDate: DateTime
      ): Transaction
  }
`;
