import Stock from "../../models/Stock.js";

const stockResolvers = {
    Query: {
        stocks: async () => {
            try {
                return await Stock.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération du stock");
            }
        },
        stock: async (_, { id }) => {
            try {
                const stock = await Stock.findByPk(id);
                if (!stock) {
                    throw new Error("Stock non trouvé");
                }
                return stock;
            } catch (error) {
                throw new Error("Erreur lors de la récupération du stock");
            }
        },
    },
    Mutation: {
        updateStock: async (_, { stockId, currentAmount, minimumAmount }) => {
            try {
                const stock = await Stock.findByPk(stockId);
                if (!stock) {
                    throw new Error("Stock non trouvé");
                }

                // Vérifier si le Product associé existe
                const productExists = await Product.findByPk(stock.ProductID);
                if (!productExists) {
                    throw new Error("Produit associé non trouvé");
                }

                return await stock.update({ CurrentAmount: currentAmount, MinimunAMount: minimumAmount });
            } catch (error) {
                throw new Error("Erreur lors de la mise à jour du stock");
            }
        }
    }
};

export default stockResolvers;