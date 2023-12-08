import Artist from "../../models/Artist.js";

const artistResolvers = {
    Query: {
        artists: async () => {
            try {
                return await Artist.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération des artistes");
            }
        },
        artist: async (_, { id }) => {
            try {
                const artist = await Artist.findByPk(id);
                if (!artist) {
                    throw new Error("Artiste non trouvé");
                }
                return artist;
            } catch (error) {
                throw new Error("Erreur lors de la récupération de l'artiste");
            }
        },
    },
    Mutation: {
        createArtist: async (_, { name, biography, webSite, profilePhoto }) => {
            try {
                return await Artist.create({
                    name: name,
                    biography: biography,
                    webSite: webSite,
                    profilePhoto: profilePhoto
                });
            } catch (error) {
                throw new Error("Erreur lors de la création de l'artiste");
            }
        },
        updateArtist: async (_, { id, name, biography, webSite, profilePhoto }) => {
            try {
                const artist = await Artist.findByPk(id);
                if (!artist) {
                    throw new Error("Artiste non trouvé");
                }
                return await artist.update({
                    name: name,
                    biography: biography,
                    webSite: webSite,
                    profilePhoto: profilePhoto
                });
            } catch (error) {
                throw new Error("Erreur lors de la mise à jour de l'artiste");
            }
        },
        deleteArtist: async (_, { id }) => {
            try {
                const artist = await Artist.findByPk(id);
                if (artist) {
                    await artist.destroy();
                    return { message: "Artiste supprimé avec succès" };
                }
                return { message: "Artiste non trouvé" };
            } catch (error) {
                throw new Error("Erreur lors de la suppression de l'artiste");
            }
        },
    }
};

export default artistResolvers;
