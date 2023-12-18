// userRoute.js
import express from "express";
import checkRole from "../middleware/checkRole";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/profile", checkRole(["user", "admin"]), userController.getProfile);

// Update user's Profil
router.put("/profile", checkRole(["user", "admin"]), userController.updateProfile);

export default router;
