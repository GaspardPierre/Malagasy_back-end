import  Product  from "../../models/Product.js";

const productResolvers = {
    Query: {
        products : async () => {
            try {
            return await Product.findAll();
        } catch (error) {
            throw new Error(error.message || "An error occurred while fetching products");
          }
        },
        product : async (_, { id }) => {
           try {
            const product = await Product.findByPk(id);
            if(!product) {
                throw new Error("Product not found");
            }
            return product;
           }catch (error) {
            throw new Error(error.message || " An error occurred while fetching the product");
           }
        },
    },

    Mutation: { 
        createProduct: async (_, { name, description, price, availableQuantity, artistId, categoryId, dimension, weight }) => {
            try {
                // Vérifier si l'Artist et la Category existent
                const artistExists = await Artist.findByPk(artistId);
                const categoryExists = await Category.findByPk(categoryId);

                if (!artistExists || !categoryExists) {
                    throw new Error("Artiste ou catégorie non trouvée");
                }

                return await Product.create({
                    Name: name,
                    Description: description,
                    Price: price,
                    AvailableQuantity: availableQuantity,
                    ArtistId: artistId,
                    CategoryId: categoryId,
                    Dimension: dimension,
                    Weight: weight,
                    CreatedAt: new Date()
                });
            } catch (error) {
                throw new Error("Erreur lors de la création du produit");
            }
        },
      //  Delete Product
      deleteProduct: async (_, { id }) => {
        try {
            
        
        const product = await Product.findByPk(id);
        if(product) {
            await product.destroy();
          return { message: "Producct successfully deleted"};
        }
        return { message: "Product not found"};
    } catch(error) {
        return {message : error.message || "An error occurred during the delation process"}
    }
},
    // Update Product
    updateProduct: async (_, { id, name, description, price, availableQuantity, artistId, categoryId, dimension, weight }) => {
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                throw new Error("Product not found");
            }
            await product.update({
                Name :name,
                Description: description,
                Price: price,
                AvailableQuantity: availableQuantity,
                ArtistId: artistId,
                categoryId: categoryId,
                Dimension: dimension,
                Weight: weight

            });
            return product;
        } catch (error) {
            return { message: error.message || "An error occurred during the update process" };
        }
    },
},
};

export default productResolvers;