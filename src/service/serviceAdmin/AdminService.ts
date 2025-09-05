import { PrismaClient } from "@generated/prisma";
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
}