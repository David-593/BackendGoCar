import { AuthController } from "controllers/controllerAuth/AuthController";
import { Router } from "express";

const router = Router();
const authController = new AuthController();


//ruta de registro
router.post("/register", (req, res) => authController.register(req, res));

// Ruta de login
router.post("/login", (req, res) => authController.login(req, res));

export default router;