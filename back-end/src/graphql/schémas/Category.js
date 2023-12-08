import gql from "graphql-tag";

export const categoryTypeDefs = gql`
  type Category {
      id: ID!
      categorie: String!
      descriptionCategorie: String
  }

  type Query {
      categories: [Category]
      category(id: ID!): Category
  }

  type Mutation {
      createCategory(
          categorie: String!,
          descriptionCategorie: String
      ): Category

      updateCategory(
          id: ID!,
          categorie: String,
          descriptionCategorie: String
      ): Category

      deleteCategory(id: ID!): Category
  }
`;
