import  User  from "../../models/User.js";

const userResolvers = {
  Query: {
    users: async () => {
      try {
        return await User.findAll();
      } catch (error) {
        throw new Error(error.message || "An error occurred while fetching users");
      }
    },

    user: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (error) {
        throw new Error(error.message || "An error occurred while fetching the user");
      }
    },
  },
  Mutation: {
    createUser: async (_, { email, passwordHash, name, firstName, registerAt, statutCompte, role }) => {
      try {
        const user = await User.create({
          email: email,
          passwordHash: passwordHash,
          name: name,
          firstName: firstName,
          registerAt: registerAt,
          statutCompte: statutCompte,
          role: role,
        });
        console.log("****USER****",user); 
        return user; // Retournez la variable `user`
      } catch (error) { console.log(error);
        throw new Error(error.message || "An error occurred while creating the user");
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        await user.destroy();
        return { message: "User successfully deleted" };
      } catch (error) {
        throw new Error(error.message || "An error occurred while deleting the user");
      }
    },
    updateUser: async (_, { id, email, passwordHash, name, firstName, registerAt, statutCompte, role }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        await user.update({
          email: email,
          passwordHash: passwordHash,
          name: name,
          firstName: firstName,
          registerAt: registerAt,
          statutCompte: statutCompte,
          role: role,
        });
     console.log(user)
        return user;
      } catch (error) {
        throw new Error(error.message || "An error occurred while updating the user");
      }
    },
  },
};

export default userResolvers;
