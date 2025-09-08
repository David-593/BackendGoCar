"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const prisma_1 = require("@generated/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new prisma_1.PrismaClient();
class AuthUserService {
    async register(createUserDto) {
        const { cedula, nombres, apellidos, email, password, telefono, redSocial } = createUserDto;
        const hassedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await prisma.usuario.create({
            data: {
                cedula,
                nombres,
                apellidos,
                email,
                password: hassedPassword,
                telefono,
                redSocial
            },
        });
        return user;
    }
    async login(authDto) {
        const { email, password } = authDto;
        const user = await prisma.usuario.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        const passwordValid = await bcrypt_1.default.compare(password, user.password);
        if (!passwordValid) {
            throw new Error("Contraseña incorrecta");
        }
        if (!process.env.JWT_SECRET) {
            throw new Error("No hay contraseña configurada en el env");
        }
        const token = jsonwebtoken_1.default.sign({ email: user.email, cedula: user.cedula, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return { token, user };
    }
}
exports.AuthUserService = AuthUserService;
//# sourceMappingURL=AuthService.js.map