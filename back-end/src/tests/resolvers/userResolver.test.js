// Imports
import  userResolvers  from "../../graphql/resolvers/userResolvers.js";
import User from "../../models/User.js";
import Order from "../../models/Order.js";
import Review from "../../models/Review.js";
import ShoppingCart from "../../models/ShoppingCart.js";
import Transaction from "../../models/Transaction.js";
import NavigationHistory from "../../models/NavigationHistory.js";
import Product from "../../models/Product.js";
import {jest} from "@jest/globals";

// Mocks 
jest.mock("../../models/User");
jest.mock("../../models/Order");
jest.mock("../../models/Review");
jest.mock("../../models/ShoppingCart");
jest.mock("../../models/Transaction");
jest.mock("../../models/NavigationHistory");
jest.mock("../../models/Product");


describe("users resolver", () => {
  it("returns all users for admin", async () => {
    const result = await userResolvers.Query.users();
    expect(mockUser.findAll).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "User 1" }]);
  });

  it("throws error if error fetching users", async () => {
    User.findAll.mockRejectedValue(new Error("Error finding users"));
    
    await expect(userResolvers.Query.users()).rejects.toThrow("Error finding users"); 
  });
});

// Test user resolver
describe("user resolver", () => {
  it("returns user by id for admin", async () => {
    const mockUser = {id: 1, name: "User 1"};
    User.findByPk.mockResolvedValue(mockUser);

    const result = await userResolvers.Query.user(null, {id: 1});
    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockUser);
  });

  it("throws error if user not found", async () => {
    User.findByPk.mockResolvedValue(null);

    await expect(userResolvers.Query.user(null, {id: 1})).rejects.toThrow("User not found");
  });

  it("throws error if error fetching user", async () => {
    User.findByPk.mockRejectedValue(new Error("Error finding user"));

    await expect(userResolvers.Query.user(null, {id: 1})).rejects.toThrow("Error finding user");
  });
});

// Test userOrders resolver
describe("userOrders resolver", () => {
  it("returns user orders", async () => {
    const mockUser = {id: 1};
    User.findByPk.mockResolvedValue(mockUser);

    const mockOrders = [{id: 1}, {id: 2}];
    Order.findAll.mockResolvedValue(mockOrders);

    const result = await userResolvers.userOrders(null, {userId: 1});
    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(Order.findAll).toHaveBeenCalledWith({where: {userId: 1}});
    expect(result).toEqual(mockOrders);
  });

  it("throws error if user not found", async () => {
    User.findByPk.mockResolvedValue(null);

    await expect(userResolvers.userOrders(null, {userId: 1})).rejects.toThrow("Utilisateur non trouvé.");
  });

  it("throws error if error fetching orders", async () => {
    User.findByPk.mockRejectedValue(new Error("Error finding user"));

    await expect(userResolvers.userOrders(null, {userId: 1})).rejects.toThrow("Error finding user");
  });
});

// Test userReviews resolver 
describe("userReviews resolver", () => {

  // ...

  it("returns user reviews for product", async () => {
    
    // ...

    const mockReviews = [{userId: 1, productId: 1}];
    Review.findAll.mockResolvedValue(mockReviews);

    const result = await userResolvers.userReviews(null, {userId: 1, productId: 1});
    expect(Review.findAll).toHaveBeenCalledWith({where: {userId: 1, productId: 1}});
    expect(result).toEqual(mockReviews);
  });

  it("returns user reviews without product", async () => {
    // ...

    const mockReviews = [{userId: 1}];
    Review.findAll.mockResolvedValue(mockReviews);

    const result = await userResolvers.userReviews(null, {userId: 1});
    expect(Review.findAll).toHaveBeenCalledWith({where: {userId: 1}});
    expect(result).toEqual(mockReviews);
  });

  it("throws error if user not found", async () => {
    User.findByPk.mockResolvedValue(null);

    await expect(userResolvers.userReviews(null, {userId: 1})).rejects.toThrow("Utilisateur non trouvé.");
  });

  it("throws error if product not found", async () => {
    Product.findByPk.mockResolvedValue(null);

    await expect(userResolvers.userReviews(null, {userId: 1, productId: 1})).rejects.toThrow("Produit non trouvé.");
  });

  it("throws error if error fetching reviews", async () => {
    Review.findAll.mockRejectedValue(new Error("Error fetching reviews"));

    await expect(userResolvers.userReviews(null, {userId: 1})).rejects.toThrow("Error fetching reviews");
  });
});
// Test userShoppingCart resolver
describe("userShoppingCart resolver", () => {
  it("returns user shopping cart", async () => {
    const mockUser = {id: 1};
    User.findByPk.mockResolvedValue(mockUser);

    const mockCart = {userId: 1};
    ShoppingCart.findOne.mockResolvedValue(mockCart);

    const result = await userResolvers.userShoppingCart(null, {userId: 1});
    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(ShoppingCart.findOne).toHaveBeenCalledWith({where: {userId: 1}});
    expect(result).toEqual(mockCart);
  });

  it("throws error if user not found", async () => {
    User.findByPk.mockResolvedValue(null);

    await expect(userResolvers.userShoppingCart(null, {userId: 1})).rejects.toThrow("Utilisateur non trouvé."); 
  });

  it("throws error if cart not found", async () => {
    ShoppingCart.findOne.mockResolvedValue(null);

    await expect(userResolvers.userShoppingCart(null, {userId: 1})).rejects.toThrow("Panier d'achat non trouvé.");
  });

  it("throws error if error fetching cart", async () => {
    ShoppingCart.findOne.mockRejectedValue(new Error("Error fetching cart"));

    await expect(userResolvers.userShoppingCart(null, {userId: 1})).rejects.toThrow("Error fetching cart");
  });
});

// Test userTransactions resolver
describe("userTransactions resolver", () => {
  it("returns user transactions", async () => {
    const mockUser = {id: 1};
    User.findByPk.mockResolvedValue(mockUser);

    const mockTransactions = [{userId: 1}, {userId: 1}];
    Transaction.findAll.mockResolvedValue(mockTransactions);

    const result = await userResolvers.userTransactions(null, {userId: 1});
    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(Transaction.findAll).toHaveBeenCalledWith({where: {userId: 1}});
    expect(result).toEqual(mockTransactions);
  });

  it("throws error if user not found", async () => {
    User.findByPk.mockResolvedValue(null);

    await expect(userResolvers.userTransactions(null, {userId: 1})).rejects.toThrow("Utilisateur non trouvé.");
  });

  it("throws error if error fetching transactions", async () => {
    Transaction.findAll.mockRejectedValue(new Error("Error fetching transactions"));

    await expect(userResolvers.userTransactions(null, {userId: 1})).rejects.toThrow("Error fetching transactions");
  });
});

// Test userNavigationHistory resolver 
describe("userNavigationHistory resolver", () => {
  it("returns user navigation history", async () => {
    const mockUser = {id: 1};
    User.findByPk.mockResolvedValue(mockUser);

    const mockHistory = [{userId: 1}, {userId: 1}];
    NavigationHistory.findAll.mockResolvedValue(mockHistory);

    const result = await userResolvers.userNavigationHistory(null, {userId: 1});
    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(NavigationHistory.findAll).toHaveBeenCalledWith({where: {userId: 1}});
    expect(result).toEqual(mockHistory);
  });

  it("throws error if user not found", async () => {
    User.findByPk.mockResolvedValue(null);

    await expect(userResolvers.userNavigationHistory(null, {userId: 1})).rejects.toThrow("Utilisateur non trouvé.");
  });

  it("throws error if error fetching navigation history", async () => {
    NavigationHistory.findAll.mockRejectedValue(new Error("Error fetching navigation history"));

    await expect(userResolvers.userNavigationHistory(null, {userId: 1})).rejects.toThrow("Error fetching navigation history");
  });
});