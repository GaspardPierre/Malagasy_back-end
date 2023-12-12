import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/user";
import { signup } from "../../auth/authController";
import sequelize from "../../config/db";
import {describe, expect, test} from "@jest/globals";
// Mock des modules et modèles externes
jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../../models/user");

describe("signup", () => {
  beforeEach(() => {
    // Réinitialisation des mocks avant chaque test
    bcrypt.hash.mockClear();
    jwt.sign.mockClear();
    User.findOne.mockClear();
    User.create.mockClear();

    // Mocking de la logique de bcrypt et jwt
    bcrypt.hash.mockResolvedValue("hashedPassword");
    jwt.sign.mockReturnValue("testToken");
  });

  test("returns 201 and user data on successful signup", async () => {
    // Simulez qu'aucun utilisateur n'existe avec cet email
    User.findOne.mockResolvedValue(null);
    User.create.mockResolvedValue({
      id: 1,
      name: "John Doe",
      email: "john@email.com"
    });

    const req = {
      body: {
        name: "John Doe",
        email: "john@email.com",
        passwordHash: "password123"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: expect.any(String),
      user: expect.objectContaining({
        name: "John Doe",
        email: "john@email.com"
      }),
      token: expect.any(String)
    });
  });

  test("returns 400 if validation fails", async () => {
    const req = {
      body: {
        name: "John Doe"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: expect.any(String)
    });
  });

  test("returns 400 if email already exists", async () => {
    User.findOne.mockResolvedValue({ id: 2, name: "Jane Doe", email: "jane@email.com" });

    const req = {
      body: {
        name: "John Doe",
        email: "jane@email.com",
        passwordHash: "password123"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: expect.any(String)
    });
  });

  test("handles errors", async () => {
    User.create.mockRejectedValue(new Error("Erreur de création"));

    const req = {
      body: {
        name: "John Doe",
        email: "john@email.com",
        passwordHash: "password123"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await signup(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: expect.any(String)
    });
  });
  afterAll(done => {
    // Fermer la connexion à la base de données pour permettre à Jest de quitter correctement
    sequelize.close().then(() => done());
  });
});