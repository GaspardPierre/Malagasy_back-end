import Transaction from "../../models/Transaction.js";
import Order from "../../models/Order.js";

const transactionResolvers = {
    Query: {
        transactions: async () => {
            try {
                return await Transaction.findAll();
            } catch (error) {
                throw new Error("Erreur lors de la récupération des transactions");
            }
        },
        transaction: async (_, { id }) => {
            try {
                const transaction = await Transaction.findByPk(id);
                if (!transaction) {
                    throw new Error("Transaction non trouvée");
                }
                return transaction;
            } catch (error) {
                throw new Error("Erreur lors de la récupération de la transaction");
            }
        },
    },
    Mutation: {
        createTransaction: async (_, { amount, userId, orderId, paymentMeans, status }) => {
            try {
                const orderExists = await Order.findByPk(orderId);
                if (!orderExists) {
                    throw new Error("Commande non trouvée");
                }

                return await Transaction.create({
                    amount: amount,
                    userID: userId,
                    orderID: orderId,
                    payementMeans: paymentMeans,
                    status: status,
                    transactionDate: new Date()
                });
            } catch (error) {
                throw new Error("Erreur lors de la création de la transaction");
            }
        },
        updateTransaction: async (_, { id, status }) => {
            try {
                const transaction = await Transaction.findByPk(id);
                if (!transaction) {
                    throw new Error("Transaction non trouvée");
                }
                return await transaction.update({ Status: status });
            } catch (error) {
                throw new Error("Erreur lors de la mise à jour de la transaction");
            }
        },
    }
};

export default transactionResolvers;
