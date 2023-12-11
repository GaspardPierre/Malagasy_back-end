import { userTypeDefs} from "./User.js";
import { productTypeDefs } from "./Product.js";
import { shoppingCartTypeDefs } from "./ShoppingCart.js";
import { navigationHistoryTypeDefs } from "./NavigationHistory.js";
import { orderTypeDefs } from "./Order.js";
import { favoriTypeDefs } from "./Favori.js";
import { newsletterTypeDefs } from "./Newsletter.js";
import { artistTypeDefs} from "./Artist.js";
import { supportTypeDefs} from "./Support.js";
import { reviewTypeDefs} from "./Review.js";
import { categoryTypeDefs } from "./Category.js";   
import { addressTypeDefs } from "./Address.js";
import { transactionTypeDefs } from "./Transaction.js";
import { stockTypeDefs} from "./Stock.js";
import { orderItemTypeDefs } from "./OrderItem.js";


import gql from "graphql-tag";

export const typeDefs = gql `
${userTypeDefs}
${productTypeDefs}
${shoppingCartTypeDefs}
${navigationHistoryTypeDefs}
${orderTypeDefs}
${favoriTypeDefs}
${newsletterTypeDefs}
${artistTypeDefs}
${supportTypeDefs}
${reviewTypeDefs}
${categoryTypeDefs}
${addressTypeDefs}
${supportTypeDefs}
${transactionTypeDefs}
${stockTypeDefs}
${orderItemTypeDefs}` ;


