import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const productTypeDefs = gql`
scalar DateTime
type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    availableQuantity: Int!
    artistId: ID!
    categoryId: ID!
    dimension : String
    Weight: Float
    createdAt: DateTime
    updatedAt: String
}


    ` ; 
  