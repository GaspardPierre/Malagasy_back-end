import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar";

export const typeDefs = gql`
scalar DateTime
type Favory {
    id: ID!
    userId: ID!
    productId: ID!
    dateAddition: Datetime
}
`;   