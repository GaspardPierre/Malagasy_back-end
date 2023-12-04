import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar";

export const typeDefs = gql`
scalar DateTime
type shoppingCart {
    id: ID!
    userId: ID!
    productId: ID!
    quantity: Int!
    dateAddition: DateTime!
}
`; 