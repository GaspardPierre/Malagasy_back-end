import  Product  from "../../models/Product.js";
import Category from "../../models/Category.js";
import Artist from "../../models/Artist.js";

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
        createProduct: async (_, { name, description, photoURL, price, availableQuantity, artistID, categoryID, dimension, weight }) => {
          try {
            console.log("createProduct - Début :", { name, description, photoURL, price, availableQuantity, artistID, categoryID, dimension, weight });
    
            // Vérifier si l'Artist et la Category existent
            const artistExists = await Artist.findByPk(artistID);
            const categoryExists = await Category.findByPk(categoryID);
    
            console.log("Artist trouvé :", artistExists !== null);
            console.log("Category trouvée :", categoryExists !== null);
    
            if (!artistExists || !categoryExists) {
              throw new Error("Artiste ou catégorie non trouvée");
            }
    
            const newProduct = await Product.create({
              name: name,
              description: description,
              photoURL: photoURL,
              price: price,
              availableQuantity: availableQuantity,
              artistID: artistID,
              categoryID: categoryID,
              dimension: dimension,
              weight: weight,
              createdAt: new Date()
            });
    
            console.log("Produit créé :", newProduct.get({ plain: true })); 
            return newProduct;
          } catch (error) {
            console.error("Erreur lors de la création du produit :", error);
            throw new Error("Erreur lors de la création du produit");
          }
        },
        // Delete Product
        deleteProduct: async (_, { id }) => {
          try {
            console.log("deleteProduct - ID :", id);
    
            const product = await Product.findByPk(id);
            console.log("Produit trouvé pour suppression :", product !== null);
    
            if (product) {
              await product.destroy();
              console.log("Produit supprimé");
              return { message: "Product successfully deleted" };
            }
    
            return { message: "Product not found" };
          } catch (error) {
            console.error("Erreur lors de la suppression du produit :", error);
            return { message: error.message || "An error occurred during the deletion process" };
          }
        },
        // Update Product
        updateProduct: async (_, { id, name, description, price, availableQuantity, artistID, categoryID, dimension, weight }) => {
          try {
            console.log("updateProduct - ID :", id);
    
            const product = await Product.findByPk(id);
            console.log("Produit trouvé pour mise à jour :", product !== null);
    
            if (!product) {
              throw new Error("Product not found");
            }
    
            await product.update({
              name: name,
              description: description,
              photoURL: photoURL,
              price: price,
              availableQuantity: availableQuantity,
              artistID: artistID,
              categoryID: categoryID,
              dimension: dimension,
              weight: weight
            });
    
            console.log("Produit mis à jour :", product);
            return product;
          } catch (error) {
            console.error("Erreur lors de la mise à jour du produit :", error);
            return { message: error.message || "An error occurred during the update process" };
          }
        },
      },
      // ...
    };
    
    export default productResolvers;