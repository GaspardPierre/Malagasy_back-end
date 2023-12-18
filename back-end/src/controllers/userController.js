import User from "../models/User.js";

const userController = {
  getProfile: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).send("Utilisateur non trouvé");
      }
      res.json(user);
    } catch (error) {
      res.status(500).send("Erreur serveur");
    }
  },

  updateProfile: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).send("Utilisateur non trouvé");
      }
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).send("Erreur serveur");
    }
  },
};

export default userController;
