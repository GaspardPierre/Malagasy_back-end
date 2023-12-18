import  User  from "../../models/User.js";
import  Order  from "../../models/Order.js";
import  Review from"../../models/Review.js";
import ShoppingCart from "../../models/ShoppingCart.js";
import  Transaction  from "../../models/Transaction.js";
import NavigationHistory from "../../models/NavigationHistory.js";
import Product from "../../models/Product.js";
import validator from "validator";
import checkRole from "../../middleware/checkRole.js";

const userResolvers = {
  Query: {
    users: checkRole(["admin"], async () => {
      try {
        return await User.findAll();
      } catch (error) {
        throw new Error(error.message || "An error occurred while fetching users");
      }
    }),

    user: checkRole(["customer","visistor", "admin"], async (_, { id }) => {
      const user = await User.findByPk(id);
      if(user.role !=="admin" && user.id !== id) {
        throw new Error("Unauthorized to fetch other user details");
      }
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (error) {
        throw new Error(error.message || "An error occurred while fetching the user");
      }
    }),
  },
  userOrders: async (_, { userId }) => {
    if (!userId) throw new Error("L'identifiant de l'utilisateur est requis.");
    
    try {
      const user = await User.findByPk(userId);
      if (!user) throw new Error("Utilisateur non trouvé.");
  
      return await Order.findAll({ where: { userId } });
    } catch (error) {
      throw new Error(error.message || "Erreur lors de la récupération des commandes de l'utilisateur.");
    }
  },
  
  userReviews: async (_, { userId, productId }) => {
    try {
      // Validation de l'userId et du productId
      if (!userId) throw new Error("L'identifiant de l'utilisateur est requis.");
      if (productId && !await Product.findByPk(productId)) {
        throw new Error("Produit non trouvé.");
      }
// Si productId existe, on va chercher le userId et le productID , sinon on cherche juste l'userId
      const whereClause = productId ? { userId, productId } : { userId };
      return await Review.findAll({ where: whereClause });
    } catch (error) {
      throw new Error(error.message || "Erreur lors de la récupération des avis.");
    }
  },
  
  userShoppingCart: async (_, { userId }) => {
    if (!userId) throw new Error("L'identifiant de l'utilisateur est requis.");
  
    try {
      const user = await User.findByPk(userId);
      if (!user) throw new Error("Utilisateur non trouvé.");
  
      const cart = await ShoppingCart.findOne({ where: { userId } });
      if (!cart) throw new Error("Panier d'achat non trouvé.");
  
      return cart;
    } catch (error) {
      throw new Error(error.message || "Erreur lors de la récupération du panier d'achat.");
    }
  },
  
  userTransactions: async (_, { userId }) => {
    if (!userId) throw new Error("L'identifiant de l'utilisateur est requis.");
  
    try {
      const user = await User.findByPk(userId);
      if (!user) throw new Error("Utilisateur non trouvé.");
  
      return await Transaction.findAll({ where: { userId } });
    } catch (error) {
      throw new Error(error.message || "Erreur lors de la récupération des transactions de l'utilisateur.");
    }
  },
  
  userNavigationHistory: async (_, { userId }) => {
    if (!userId) throw new Error("L'identifiant de l'utilisateur est requis.");
  
    try {
      const user = await User.findByPk(userId);
      if (!user) throw new Error("Utilisateur non trouvé.");
  
      return await NavigationHistory.findAll({ where: { userId } });
    } catch (error) {
      throw new Error(error.message || "Erreur lors de la récupération de l'historique de navigation de l'utilisateur.");
    }
  },
  
 
 

  Mutation: {
    createUser: async (_, { email, passwordHash, name, firstName, registerAt, statutCompte, role }) => {
     if(!validator.isEmail(email)) {
      throw new Error("Invalid email format") ;
     }
     if(validator.isEmpty(passwordHash)) {
      throw new Error("Password is required");
     }
     
      try {
        const user = await User.create({
          email: email,
          passwordHash: passwordHash,
          name: name,
          firstName: firstName,
          registerAt: registerAt,
          statutCompte: statutCompte,
          role: role,
        });
        console.log("****USER****",user); 
        return user; // Retournez la variable `user`
      } catch (error) { console.log(error);
        throw new Error(error.message || "An error occurred while creating the user");
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        await user.destroy();
        return { message: "User successfully deleted" };
      } catch (error) {
        throw new Error(error.message || "An error occurred while deleting the user");
      }
    },
    updateUser: async (_, { id, email, passwordHash, name, firstName, registerAt, statutCompte, role }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        await user.update({
          email: email,
          passwordHash: passwordHash,
          name: name,
          firstName: firstName,
          registerAt: registerAt,
          statutCompte: statutCompte,
          role: role,
        });
     console.log(user)
        return user;
      } catch (error) {
        throw new Error(error.message || "An error occurred while updating the user");
      }
    },
  },
};

export default userResolvers;
