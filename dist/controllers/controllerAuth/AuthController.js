"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../../service/serviceAuth/AuthService");
const authService = new AuthService_1.AuthUserService();
class AuthController {
    async register(req, res) {
        try {
            const { cedula, nombres, apellidos, email, password, telefono, redSocial } = req.body;
            const user = await authService.register({
                cedula,
                nombres,
                apellidos,
                email,
                password,
                telefono,
                redSocial,
            });
            res.status(201).json({ message: "Usuario registrado", user });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async login(req, res) {
        try {
            const authDto = req.body;
            const result = await authService.login(authDto);
            res.status(200).json({ message: "Login exitoso", ...result });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map