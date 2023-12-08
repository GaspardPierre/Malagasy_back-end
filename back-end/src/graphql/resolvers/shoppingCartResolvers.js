import ShoppingCart from "../../models/ShoppingCart.js";
import User from "../../models/User.js";
import Product from "../../models/Product.js";

const shoppingCartResolvers = {
    Query: {
        shoppingCarts: async () => {
            try {
                return await ShoppingCart.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération des paniers");
            }
        },
        shoppingCart: async (_, { id }) => {
            try {
                const cart = await ShoppingCart.findByPk(id);
                if (!cart) {
                    throw new Error("Panier non trouvé");
                }
                return cart;
            } catch (error) {
                throw new Error("Erreur lors de la récupération du panier");
            }
        },
    },
    Mutation: {
        addToCart: async (_, { userId, productId, quantity }) => {
            try {
                  // Vérifier si le User existe
                  const userExists = await User.findByPk(userId);
                  if (!userExists) {
                      throw new Error("Utilisateur non trouvé");
                  }
  
                  // Vérifier si le Product existe
                  const productExists = await Product.findByPk(productId);
                  if (!productExists) {
                      throw new Error("Produit non trouvé");
                  }
  
                  return await ShoppingCart.create({
                      userID: userId,
                      productID: productId,
                      quantity: quantity,
                      dateAddition: new Date()
                  });
              } catch (error) {
                  throw new Error("Erreur lors de l'ajout au panier");
              }
          },
  
        updateCart: async (_, { cartId, quantity }) => {
            try {
                const cart = await ShoppingCart.findByPk(cartId);
                if (!cart) {
                    throw new Error("Panier non trouvé");
                }
                return await cart.update({ Quantity: quantity });
            } catch (error) {
                throw new Error("Erreur lors de la mise à jour du panier");
            }
        },
        removeFromCart: async (_, { cartId }) => {
            try {
                const cart = await ShoppingCart.findByPk(cartId);
                if (cart) {
                    await cart.destroy();
                    return { message: "Article retiré du panier" };
                }
                return { message: "Panier non trouvé" };
            } catch (error) {
                throw new Error("Erreur lors du retrait du panier");
            }
        },
    }
};

export default shoppingCartResolvers;
