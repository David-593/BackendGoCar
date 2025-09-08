"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioService_1 = require("service/serviceUsuario/UsuarioService");
const userService = new UsuarioService_1.UsuarioService();
class UsuarioController {
    constructor() {
        this.updateUserByCedula = async (req, res) => {
            try {
                const cedula = req.cedula;
                const data = req.body;
                const user = await userService.updateUserByCedula(cedula, data);
                return res.json(user);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        };
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map