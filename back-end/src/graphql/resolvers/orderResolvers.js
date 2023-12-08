import Order from "../../models/Order.js";
import Address from "../../models/Address.js";

const orderResolvers = {
    Query: {
        orders: async () => {
            try {
                return await Order.findAll();
            } catch (error) {
                throw new Error(error.message || "Une erreur s'est produite lors de la récupération des commandes");
            }
        },
        order: async (_, { id }) => {
            try {
                const order = await Order.findByPk(id);
                if (!order) {
                    throw new Error("Commande non trouvée");
                }
                return order;
            } catch (error) {
                throw new Error(error.message || "Une erreur s'est produite lors de la récupération de la commande");
            }
        },
    },
    Mutation: {
        createOrder: async (_, { userId, orderDate, statut, totalOrder, addressLivraisonId }) => {
            try {
                const userExists = await User.findByPk(userId);
                if (!userExists) {
                    throw new Error("Utilisateur non trouvé");
                }

                // Vérifier si l'Address existe
                const addressExists = await Address.findByPk(addressLivraisonId);
                if (!addressExists) {
                    throw new Error("Adresse de livraison non trouvée");
                }

                return await Order.create({
                    userID: userId,
                    orderDate: orderDate,
                    statut: statut,
                    totalOrder: totalOrder,
                    addressLivraisonID: addressLivraisonId
                });
            } catch (error) {
                throw new Error(error.message || "Une erreur s'est produite lors de la création de la commande");
            }
        },

             
        updateOrder: async (_, { id, statut, totalOrder }) => {
            try {
                const order = await Order.findByPk(id);
                if (!order) {
                    throw new Error("Commande non trouvée");
                }
                return await order.update({
                    statut: statut,
                    totalOrder: totalOrder
                });
            } catch (error) {
                throw new Error(error.message || "Une erreur s'est produite lors de la mise à jour de la commande");
            }
        },
        deleteOrder: async (_, { id }) => {
            try {
                const order = await Order.findByPk(id);
                if (order) {
                    await order.destroy();
                    return { message: "Commande supprimée avec succès" };
                }
                return { message: "Commande non trouvée" };
            } catch (error) {
                throw new Error(error.message || "Une erreur s'est produite pendant le processus de suppression");
            }
        },
    }
};

export default orderResolvers;
