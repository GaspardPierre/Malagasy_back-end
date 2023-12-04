import gql from "graphql-tag";

export const typeDefs = gql`
type Newsletter {
    id: ID!
  email: String!
  registeredAt: Date
}
`;