import Support from "../../models/Support.js";

const supportResolvers = {
    Query: {
        supports: async () => {
            try {
                return await Support.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération des tickets de support");
            }
        },
        support: async (_, { id }) => {
            try {
                const support = await Support.findByPk(id);
                if (!support) {
                    throw new Error("Ticket de support non trouvé");
                }
                return support;
            } catch (error) {
                throw new Error("Erreur lors de la récupération du ticket de support");
            }
        },
    },
    Mutation: {
        createSupportTicket: async (_, { userId, subject, message }) => {
            try {
                // Vérifier si le User existe
                const userExists = await User.findByPk(userId);
                if (!userExists) {
                    throw new Error("Utilisateur non trouvé");
                }

                return await Support.create({
                    UserID: userId,
                    Subject: subject,
                    Message: message,
                    StatutTicket: "Open",
                    OpenAt: new Date()
                });
            } catch (error) {
                throw new Error("Erreur lors de la création du ticket de support");
            }
        },
        updateSupportTicket: async (_, { ticketId, statutTicket, closingDate }) => {
            try {
                const support = await Support.findByPk(ticketId);
                if (!support) {
                    throw new Error("Ticket de support non trouvé");
                }
                return await support.update({ Statut });
            } catch (error) {
                throw new Error("Erreur lors de la mise à jour du ticket de support");
            }
        },
        closeSupport: async (_, { id }) => {
            try {
                const supportTicket = await Support.findByPk(id, {
                    include: [User] // Utilisation du modèle User
                });

                if (!supportTicket) {
                    throw new Error("Ticket de support non trouvé");
                }

                supportTicket.statutTicket = "Closed";
                supportTicket.closingDate = new Date();

                await supportTicket.save();

                return supportTicket;
            } catch (error) {
                throw new Error("Erreur lors de la fermeture du ticket de support");
            }
        }
    }
};

export default supportResolvers;
