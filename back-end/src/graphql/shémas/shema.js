import { userTypeDefs} from "./User.js";
import { productTypeDefs } from "./Product.js";
import gql from "graphql-tag";

export const typeDefs = gql `
${userTypeDefs}
${productTypeDefs}`;
