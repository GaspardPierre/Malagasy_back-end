import  userResolvers from "./userResolvers.js";
import productResolvers  from "./productResolvers.js";
import orderResolvers from "./orderResolvers.js";
import categoryResolvers from "./categoryResolvers.js";
import addressResolvers from "./addressResolvers.js";
import supportResolvers from "./supportResolvers.js";
import shoppingCartResolvers from "./shoppingCartResolvers.js";
import stockResolvers from "./stockResolvers.js";
import favoriResolvers from "./favoriResolvers.js";
import newsletterResolvers from "./newsletterResolvers.js";
import reviewResolvers from "./reviewResolvers.js";
import transactionResolvers from "./transactionResolvers.js";
import artistResolvers from "./artistResolvers.js";
import navigationHistoryResolvers from "./navigationHistoryResolvers.js";
import orderItemResolvers from "./orderItemResolvers.js";

export const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...productResolvers.Query,
        ...orderResolvers.Query,
        ...categoryResolvers.Query,
        ...addressResolvers.Query,
        ...supportResolvers.Query,
        ...shoppingCartResolvers.Query,
        ...stockResolvers.Query,
        ...artistResolvers.Query,
        ...favoriResolvers.Query,
        ...newsletterResolvers.Query,
        ...reviewResolvers.Query,
        ...transactionResolvers.Query,
        ...navigationHistoryResolvers.Query,
        ...orderItemResolvers.Query
    },
    
    Mutation: {
        
        ...userResolvers.Mutation,
        ...productResolvers.Mutation,
        ...orderResolvers.Mutation,
        ...categoryResolvers.Mutation,
        ...addressResolvers.Mutation,
        ...supportResolvers.Mutation,
        ...shoppingCartResolvers.Mutation,
        ...stockResolvers.Mutation,
        ...favoriResolvers.Mutation,
        ...artistResolvers.Mutation,
        ...newsletterResolvers.Mutation,
        ...reviewResolvers.Mutation,
        ...transactionResolvers.Mutation,
        ...navigationHistoryResolvers.Mutation,
        ...orderItemResolvers.Mutation

    },
};