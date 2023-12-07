import gql from "graphql-tag";

export const artistTypeDefs = gql`
  type Artist {
      id: ID!
      name: String!
      biography: String
      webSite: String
      profilePhoto: String
  }

  type Query {
      artists: [Artist]
      artist(id: ID!): Artist
  }

  type Mutation {
      createArtist(
          name: String!,
          biography: String,
          webSite: String,
          profilePhoto: String
      ): Artist

      updateArtist(
          id: ID!,
          name: String,
          biography: String,
          webSite: String,
          profilePhoto: String
      ): Artist

      deleteArtist(id: ID!): Artist
  }
`;
