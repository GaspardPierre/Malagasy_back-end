import Category from "../../models/Category.js";

const categoryResolvers = {
    Query: {
        categories: async () => {
            try {
                return await Category.findAll();
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la récupération des catégories");
            }
        },
        category: async (_, { id }) => {
            try {
                const category = await Category.findByPk(id);
                if (!category) {
                    throw new Error("Catégorie non trouvée");
                }
                return category;
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la récupération de la catégorie");
            }
        },
    },
    Mutation: {
        createCategory: async (_, { categorie, descriptionCategorie }) => {
            try {
                return await Category.create({ categorie, descriptionCategorie });
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la création de la catégorie");
            }
        },
        updateCategory: async (_, { id, categorie, descriptionCategorie }) => {
            try {
                const category = await Category.findByPk(id);
                if (!category) {
                    throw new Error("Catégorie non trouvée");
                }
                return await category.update({ categorie, descriptionCategorie });
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la mise à jour de la catégorie");
            }
        },
        deleteCategory: async (_, { id }) => {
            try {
                const category = await Category.findByPk(id);
                if (category) {
                    await category.destroy();
                    return { message: "Catégorie supprimée avec succès" };
                }
                return { message: "Catégorie non trouvée" };
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la suppression de la catégorie");
            }
        },
    }
};

export default categoryResolvers;
