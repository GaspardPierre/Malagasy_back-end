import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar";

export const typeDefs = gql`
type transaction {
    id: ID!
    amount: Float!
    userId: ID!
    OrderId: ID!
    paymentMeans: String
    status: String
    transactionDate: DateTime
}
`;  