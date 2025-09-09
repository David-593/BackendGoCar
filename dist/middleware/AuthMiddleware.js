"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Acceso denegado. Token requerido" });
            return;
        }
        const token = authHeader.split(" ")[1];
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET no está configurado en .env");
        }
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.cedula = decoded.cedula;
        req.rol = decoded.rol;
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Token inválido o expirado" });
        return;
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=AuthMiddleware.js.map