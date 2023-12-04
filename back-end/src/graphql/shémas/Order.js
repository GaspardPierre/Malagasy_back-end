import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar";

export const typeDefs = gql`

scalar DateTime


type Order {
    id: ID!
    status: String!
    createdAt: String
    updatedAt: String
    userId: ID!
    orderDate: DateTime!
    totalOrder: Float!
    addressLivraisonId:ID!

}

`; 