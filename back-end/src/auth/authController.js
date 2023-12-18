import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { loginSchema, signupSchema } from "../validation/validation.js";

const SECRET = process.env.JWT_SECRET;

//**LOGIN */

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Error handling
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find User by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    // Verify Password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.user_id }, SECRET, { expiresIn: "1h" });

    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la connexion", error: error.message });
  }
};

//**SIGNUP*/
const signup = async (req, res) => {
  try {
    const { name, email, passwordHash } = req.body;

    // Error handling
    const { error } = signupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Vérifier si l'email existe déjà
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: "L'email est déjà utilisé" });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(req.body.passwordHash, 10);

    // Créer un nouvel utilisateur
    const newUser = await User.create({
      name,
      email,
      passwordHash: hashedPassword,
    });

    // Générer un token JWT
    const token = jwt.sign({ id: newUser.id }, SECRET, { expiresIn: "1h" });

    // Répondre avec le token et les informations de l'utilisateur
    res
      .status(201)
      .json({
        message: "Inscription réussie",
        user: { id: newUser.id, name, email },
        token,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de l'inscription", error: error.message });
  }
};

export { login, signup };
