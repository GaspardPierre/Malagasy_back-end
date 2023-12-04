import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar";

export const typeDefs = gql`
scalar DateTime
type support {
    id: ID!
  userId: Int!
  subject: String!
  message: String
  statutTicket: String!
  openAt:DateTime!
  closingDate:DateTime
}
`;  