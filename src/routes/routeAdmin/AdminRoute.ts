import { Router } from "express";
import { AdminController } from "../../controllers/controllerAdmin/AdminController";

const router = Router();
const adminController = new AdminController();

// Ruta para registrar usuario (admin o normal)
router.post("/register", (req, res) => adminController.register(req, res));

export default router;