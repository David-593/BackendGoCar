import { Router } from "express";
import { AuthController } from "../../controllers/controllerAuth/AuthController";
import { UsuarioController } from "controllers/controllerUsuario/UsuarioController";

const router = Router();
const usuarioController = new UsuarioController();

//Ruta de actualizar usuario
router.put("/updateProfile", usuarioController.updateUserByCedula.bind(usuarioController));


export default router;
