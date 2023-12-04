import gql from "graphql-tag";

export const typeDefs = gql`
type Category {
    id: ID!
  nomsCategorie: String!
  description: String
}
`; 