"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const client_1 = require("../../generated/prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
class AdminService {
    async register(createUserDtoByAdmin) {
        const { cedula, nombres, apellidos, email, password, telefono, rol, redSocial } = createUserDtoByAdmin;
        const hassedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await prisma.usuario.create({
            data: {
                cedula,
                nombres,
                apellidos,
                email,
                password: hassedPassword,
                rol,
                telefono,
                redSocial
            },
        });
        return user;
    }
    async findUserByCedula(cedula) {
        return await prisma.usuario.findUnique({
            where: { cedula },
        });
    }
    async deleteUser(cedula) {
        const user = await prisma.usuario.delete({
            where: { cedula },
        });
        return user;
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=AdminService.js.map