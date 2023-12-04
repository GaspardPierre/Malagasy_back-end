import gql from "graphql-tag";

export const typeDefs = gql`
type Review {
    id: ID!
    rating: Int!
    comment: String
    productId: ID!
    userId: ID!
}
`;             