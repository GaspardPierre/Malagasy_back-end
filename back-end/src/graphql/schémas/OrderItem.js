import gql from "graphql-tag";

export const orderItemTypeDefs = gql `

type OrderItem {
  id: ID!
  order: Order
  product: Product
  quantity: Int!
  price: Float!
}

type Order {

    items: [OrderItem]
}



`;