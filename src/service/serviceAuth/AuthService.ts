import { PrismaClient } from '../../generated/prisma/client';
import bcrypt from 'bcrypt';
import { AuthLoginDto } from 'dto/dtoAuth/AuthDto';
import { CreateUserDto } from 'dto/dtoUsuario/UsuarioDto';
import Jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export class AuthUserService {

    //creear cita
    async register(createUserDto: CreateUserDto) {
        const { cedula, nombres, apellidos, email, password, telefono, redSocial } = createUserDto;

        const hassedPassword = await bcrypt.hash(password, 10);
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


    async login(authDto: AuthLoginDto) {
        const { email, password } = authDto;
        const user = await prisma.usuario.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            throw new Error("Contraseña incorrecta");
        }
        if (!process.env.JWT_SECRET) {
            throw new Error("No hay contraseña configurada en el env")
        }
        const token = Jwt.sign(
            { email: user.email, cedula: user.cedula, rol: user.rol },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        return { token, user };
    }
}