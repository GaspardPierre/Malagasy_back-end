import gql from "graphql-tag";

export const typeDefs = gql`
type Address {
    id: ID!
    userId: ID!
    street: ID!
    dimension:String!
    city: String!
    postCode: String!
    country: String!
    createdAt: String
    updatedAt: String
}


    ` ; 
  