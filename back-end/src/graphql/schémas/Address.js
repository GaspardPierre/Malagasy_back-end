import gql from "graphql-tag";

export const addressTypeDefs = gql`
  type Address {
      id: ID!
      userId: ID!
      street: String!
      dimension: String!
      city: String!
      postCode: String!
      country: String!
      createdAt: String
      updatedAt: String
  }

  type Query {
      addresses(userId: ID!): [Address]
      address(id: ID!): Address
  }

  type Mutation {
      createAddress(
          userId: ID!,
          street: String!,
          dimension: String!,
          city: String!,
          postCode: String!,
          country: String!
      ): Address

      updateAddress(
          id: ID!,
          street: String,
          dimension: String,
          city: String,
          postCode: String,
          country: String
      ): Address

      deleteAddress(id: ID!): Address
  }
`;
