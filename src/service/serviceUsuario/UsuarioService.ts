import { PrismaClient } from '@generated/prisma';
import { CreateUserDto } from "../../dto/dtoUsuario/UsuarioDto";

const prisma = new PrismaClient();

export class UsuarioService{

    //obtener todos
    async findAllUsers(){
        return await prisma.usuario.findMany();
    }

    //obtener por cedula
    async findUserByCedula(cedula: string){
        return await prisma.usuario.findUnique({
            where: {
                cedula
            }, 
        });
    }

    //actualizar usuario
    async updateUserByCedula(cedula: string, data: Partial<CreateUserDto>){
        return await prisma.usuario.update({
            where: {
                cedula
            }, 
            data,
        });
    }

    //eliminar usuario por administrador
    async deleteUserByCedula(cedula: string){
        return await prisma.usuario.delete({
            where:{
                cedula
            },
        });
    }
}

