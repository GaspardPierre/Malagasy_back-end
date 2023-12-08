import Review from "../../models/Review.js";

const reviewResolvers = {
    Query: {
        reviews: async () => {
            try {
                return await Review.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération des avis");
            }
        },
        review: async (_, { id }) => {
            try {
                const review = await Review.findByPk(id);
                if (!review) {
                    throw new Error("Avis non trouvé");
                }
                return review;
            } catch (error) {
                throw new Error("Erreur lors de la récupération de l'avis");
            }
        },
    },
    Mutation: {
        createReview: async (_, { rating, comment, productId, userId }) => {
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

                // Créer la Review
                return await Review.create({
                    rating: rating,
                    comment: comment,
                    productID: productId,
                    userID: userId
                });
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la création de l'avis");
            }
        },
  
        updateReview: async (_, { id, rating, comment }) => {
            try {
                const review = await Review.findByPk(id);
                if (!review) {
                    throw new Error("Avis non trouvé");
                }
                return await review.update({
                    rating: rating,
                    comment: comment
                });
            } catch (error) {
                throw new Error("Erreur lors de la mise à jour de l'avis");
            }
        },
        deleteReview: async (_, { id }) => {
            try {
                const review = await Review.findByPk(id);
                if (review) {
                    await review.destroy();
                    return { message: "Avis supprimé avec succès" };
                }
                return { message: "Avis non trouvé" };
            } catch (error) {
                throw new Error("Erreur lors de la suppression de l'avis");
            }
        },
    }
};

export default reviewResolvers;
