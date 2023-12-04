import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar";

export const typeDefs = gql`
scalar DateTime
type NavigationHistory {
    id: ID!
    userId: ID!
    productId: ID!
    visitedAt: Datetime
    
}
`;   