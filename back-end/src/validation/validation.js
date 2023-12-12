import Joi from "joi";

const email = Joi.string().email().required().messages({
  "string.email": "Veuillez fournir une adresse email valide.",
  "any.required": "L'email est requis.",
});

const password = Joi.string()
  .min(6)
  .required()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/)
  .messages({
    "string.min": "Le mot de passe doit contenir au moins 6 caractères.",
    "any.required": "Le mot de passe est requis.",
    regex:
      "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule et un caractère spécial.",
  });

const signupSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Le nom est requis.",
  }),
  email: email,
  passwordHash: Joi.string().min(6).required().messages({
    "string.min": "Le mot de passe doit contenir au moins 6 caractères.",
    "any.required": "Le mot de passe est requis.",
  }),
});

const loginSchema = Joi.object({
  email: email,
  password: password,
});

export { signupSchema, loginSchema };
