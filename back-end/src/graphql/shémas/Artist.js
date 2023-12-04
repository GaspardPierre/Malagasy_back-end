import gql from "graphql-tag";

export const typeDefs = gql`
type Artist {
    id : ID!
    name : String!
    biography: String
    webSite: String
    profilePhoto: String


}
`; 