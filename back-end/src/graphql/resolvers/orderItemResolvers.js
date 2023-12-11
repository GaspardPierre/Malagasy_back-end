import OrderItem from "../../models/OrderItem.js";
import Order from "../../models/Order.js";


const orderItemResolvers = {
    Order: {
      items: async (order) => {
        try {
          return await OrderItem.findAll({ where: { orderId: order.id } });
        } catch (error) {
          throw new Error(error.message || "Erreur lors de la récupération des articles de la commande");
        }
      }
    }
};

export default orderItemResolvers;