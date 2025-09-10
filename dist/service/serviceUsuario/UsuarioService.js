"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
class UsuarioService {
    async findAllUsers() {
        return await prisma.usuario.findMany();
    }
    async findUserByCedula(cedula) {
        return await prisma.usuario.findUnique({
            where: {
                cedula
            },
        });
    }
    async updateUserByCedula(cedula, data) {
        return await prisma.usuario.update({
            where: {
                cedula
            },
            data,
        });
    }
    async deleteUserByCedula(cedula) {
        return await prisma.usuario.delete({
            where: {
                cedula
            },
        });
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=UsuarioService.js.map