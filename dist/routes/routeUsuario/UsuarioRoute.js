"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("../../controllers/controllerUsuario/UsuarioController");
const router = (0, express_1.Router)();
const usuarioController = new UsuarioController_1.UsuarioController();
router.put("/updateProfile", usuarioController.updateUserByCedula.bind(usuarioController));
exports.default = router;
//# sourceMappingURL=UsuarioRoute.js.map