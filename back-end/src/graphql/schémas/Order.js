import gql from "graphql-tag";
import dateTimeScalar from "../utils/dateTimeScalar.js";

export const orderTypeDefs = gql`

scalar DateTime


type Order {
    id: ID!
    status: String!
    createdAt: String
    updatedAt: String
    userId: ID!
    orderDate: DateTime!
    totalOrder: Float!
    addressLivraisonId:ID!
    user:User

}
type Query {
    orders: [Order]
    order(id: ID!): Order
    orderDetails(orderId: ID!) : Order
  }

type Mutation {
    createOrder(
    status: String!,
    userId: ID!,
    orderDate: DateTime!,
    totalOrder: Float!,
    addressLivraisonId: ID!
  ): Order

  updateOrder(
    id: ID!,
    status: String,
    orderDate: DateTime,
    totalOrder: Float,
    addressLivraisonId: ID
  ): Order
  deleteOrder(id: ID!): Message 
  }

  type Message {
      message: String!
  }


`; 