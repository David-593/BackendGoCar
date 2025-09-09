"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const AdminService_1 = require("service/serviceAdmin/AdminService");
const adminService = new AdminService_1.AdminService();
class AdminController {
    async register(req, res) {
        try {
            const { cedula, nombres, apellidos, email, password, rol, telefono, redSocial } = req.body;
            const user = await adminService.register({
                cedula,
                nombres,
                apellidos,
                email,
                password,
                rol,
                telefono,
                redSocial,
            });
            res.status(201).json({ message: "Usuario registrado", user });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async findUserByCedula(req, res) {
        try {
            const { cedula } = req.body;
            if (typeof cedula !== 'string') {
                return res.status(400).json({ message: "Cédula inválida" });
            }
            const user = await adminService.findUserByCedula(cedula);
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async deleteUser(req, res) {
        try {
            const { cedula } = req.params;
            if (typeof cedula !== 'string') {
                return res.status(400).json({ message: "Cédula inválida" });
            }
            const result = await adminService.deleteUser(cedula);
            if (!result) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json({ message: "Usuario eliminado" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=AdminController.js.map