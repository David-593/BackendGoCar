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
}
exports.AdminController = AdminController;
//# sourceMappingURL=AdminController.js.map