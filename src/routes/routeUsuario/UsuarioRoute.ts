import { Router } from "express";
import { UsuarioController } from "controllers/controllerUsuario/UsuarioController";

const router = Router();
const usuarioController = new UsuarioController();

//Ruta de actualizar usuario
router.put("/updateProfile", usuarioController.updateUserByCedula.bind(usuarioController));


export default router;
