import NavigationHistory from "../../models/NavigationHistory.js";
import User from "../../models/User.js";
import Product from "../../models/Product.js";

const navigationHistoryResolvers = {
    Query: {
        navigationHistories: async () => {
            try {
                return await NavigationHistory.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération de l'historique de navigation");
            }
        },
        navigationHistory: async (_, { id }) => {
            try {
                const history = await NavigationHistory.findByPk(id, {
                    include: [
                        { model: User, as: "user" },
                        { model: Product, as: "product" }
                    ]
                });
                if (!history) {
                    throw new Error("Historique de navigation non trouvé");
                }
                return history;
            } catch (error) {
                throw new Error("Erreur lors de la récupération de l'historique de navigation");
            }
        },
    }
};

export default navigationHistoryResolvers;