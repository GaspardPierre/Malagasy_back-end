import gql from "graphql-tag";

export const categoryTypeDefs = gql`
  type Category {
      id: ID!
      nomsCategorie: String!
      description: String
  }

  type Query {
      categories: [Category]
      category(id: ID!): Category
  }

  type Mutation {
      createCategory(
          nomsCategorie: String!,
          description: String
      ): Category

      updateCategory(
          id: ID!,
          nomsCategorie: String,
          description: String
      ): Category

      deleteCategory(id: ID!): Category
  }
`;
