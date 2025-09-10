import { PrismaClient } from '../../generated/prisma/client';
import bcrypt from "bcrypt";
import { createUserDtoByAdmin } from "dto/dtoAdmin/AdminDto";

const prisma = new PrismaClient(); 
export class AdminService {
    
    //creear cita
        async register(createUserDtoByAdmin: createUserDtoByAdmin) {
            const { cedula, nombres, apellidos, email, password, telefono, rol, redSocial } = createUserDtoByAdmin; 
    
            const hassedPassword = await bcrypt.hash(password, 10);
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

    // Buscar usuario por cédula    
    async findUserByCedula(cedula: string) {
        return await prisma.usuario.findUnique({
            where: { cedula },
        });
    }   

    // Eliminar usuario por cédula
    async deleteUser(cedula: string) {
        const user = await prisma.usuario.delete({
            where: { cedula },
        });
        return user;
    }
}