// index.js dans le dossier routes
import express from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);


export default router;
