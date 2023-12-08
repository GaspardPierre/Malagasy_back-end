import Favori from "../../models/Favori.js";

const favoriResolvers = {
    Query: {
        favoris: async () => {
            try {
                return await Favori.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération des favoris");
            }
        },
        favori: async (_, { id }) => {
            try {
                const favori = await Favori.findByPk(id);
                if (!favori) {
                    throw new Error("Favori non trouvé");
                }
                return favori;
            } catch (error) {
                throw new Error("Erreur lors de la récupération du favori");
            }
        },
    },
    Mutation: {
        addToFavori: async (_, { userId, productId }) => {
            try {
                // Vérifier si le User et le Product existent
                const userExists = await User.findByPk(userId);
                const productExists = await Product.findByPk(productId);

                if (!userExists || !productExists) {
                    throw new Error("Utilisateur ou produit non trouvé");
                }

                return await Favori.create({
                    userId: userId,
                    productId: productId,
                    dateAddition: new Date()
                });
            } catch (error) {
                throw new Error("Erreur lors de l'ajout au favori");
            }
        },
        removeFromFavori: async (_, { id }) => {
            try {
                const favori = await Favori.findByPk(id);
                if (favori) {
                    await favori.destroy();
                    return { message: "Favori retiré avec succès" };
                }
                return { message: "Favori non trouvé" };
            } catch (error) {
                throw new Error("Erreur lors du retrait du favori");
            }
        },
    }
};

export default favoriResolvers;
