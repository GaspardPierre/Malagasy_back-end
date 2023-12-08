import Newsletter from "../../models/Newsletter.js";

const newsletterResolvers = {
    Query: {
        newsletters: async () => {
            try {
                return await Newsletter.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération des inscriptions à la newsletter");
            }
        },
        newsletter: async (_, { id }) => {
            try {
                const newsletter = await Newsletter.findByPk(id);
                if (!newsletter) {
                    throw new Error("Inscription à la newsletter non trouvée");
                }
                return newsletter;
            } catch (error) {
                throw new Error("Erreur lors de la récupération de l'inscription à la newsletter");
            }
        },
    },
    Mutation: {
        subscribeToNewsletter: async (_, { email }) => {
            try {
                return await Newsletter.create({
                    email: email,
                    registerAt: new Date()
                });
            } catch (error) {
                throw new Error("Erreur lors de l'inscription à la newsletter");
            }
        },
        unsubscribeFromNewsletter: async (_, { id }) => {
            try {
                const newsletter = await Newsletter.findByPk(id);
                if (newsletter) {
                    await newsletter.destroy();
                    return { message: "Désinscription de la newsletter réussie" };
                }
                return { message: "Inscription à la newsletter non trouvée" };
            } catch (error) {
                throw new Error("Erreur lors de la désinscription de la newsletter");
            }
        },
    }
};

export default newsletterResolvers;
