import { Router } from "express";
import { AdminController } from "../../controllers/controllerAdmin/AdminController";
import { authorizeRoles } from "../../middleware/RoleMiddleware";

const router = Router();
const adminController = new AdminController();

router.post("/register", authorizeRoles("admin"), async (req, res) => {
    await adminController.register(req, res);
});
// Ruta para obtener usuario por cédula (admin, usando body)
router.post("/getUser", authorizeRoles("admin"), async (req, res) => {
  await adminController.findUserByCedula(req, res);
});

// Ruta para eliminar usuario por cédula (admin, usando parámetro en la URL)
router.delete("/deleteUser/:cedula", authorizeRoles("admin"), async (req, res) => {
  await adminController.deleteUser(req, res);
});
export default router;