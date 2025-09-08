"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = authorizeRoles;
function authorizeRoles(...roles) {
    return (req, res, next) => {
        const userRole = req.user?.rol || req.rol;
        if (!userRole || !roles.includes(userRole)) {
            res.status(403).json({ message: "Acceso denegado. Rol insuficiente" });
            return;
        }
        next();
    };
}
//# sourceMappingURL=RoleMiddleware.js.map