import gql from "graphql-tag";

export const typeDefs = gql`
type stock {
    id: ID!
    productId: ID!
    CurrentAmount: Int!
    MinimunAMount: Int
}
`;   