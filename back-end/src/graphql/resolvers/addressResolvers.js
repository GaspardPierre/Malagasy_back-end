import Address from "../../models/Address.js";
import User from "../../models/User.js";


const addressResolvers = {
    Query: {
        addresses: async () => {
            try {
                return await Address.findAll();
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la récupération des adresses");
            }
        },
        address: async (_, { id }) => {
            try {
                const address = await Address.findByPk(id);
                if (!address) {
                    throw new Error("Adresse non trouvée");
                }
                return address;
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la récupération de l'adresse");
            }
        },
    },
    Mutation: {
        createAddress: async (_, { userId, street, city, postCode, country }) => {
            try {
                // Vérifier si le User existe
                const userExists = await User.findByPk(userId);
                if (!userExists) {
                    throw new Error("Utilisateur non trouvé");
                }

                return await Address.create({
                    userID: userId,
                    street: street,
                    city: city,
                    postCode: postCode,
                    country: country
                });
            } catch (error) {
                throw new Error("Erreur lors de la création de l'adresse");
            }
        },

        updateAddress: async (_, { id, street, city, postCode, country }) => {
            try {
                const address = await Address.findByPk(id);
                if (!address) {
                    throw new Error("Adresse non trouvée");
                }

                // Vérifier si le User associé existe
                const userExists = await User.findByPk(address.UserID);
                if (!userExists) {
                    throw new Error("Utilisateur associé non trouvé");
                }

                return await address.update({
                    street: street,
                    city: city,
                    postCode: postCode,
                    country: country
                });
            } catch (error) {
                throw new Error("Erreur lors de la mise à jour de l'adresse");
            }
        },
        deleteAddress: async (_, { id }) => {
            try {
                const address = await Address.findByPk(id);
                if (address) {
                    await address.destroy();
                    return { message: "Adresse supprimée avec succès" };
                }
                return { message: "Adresse non trouvée" };
            } catch (error) {
                throw new Error(error.message || "Erreur lors de la suppression de l'adresse");
            }
        },
    }
};

export default addressResolvers;
