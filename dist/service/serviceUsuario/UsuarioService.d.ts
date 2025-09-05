import { CreateUserDto } from "../../dto/dtoUsuario/UsuarioDto";
export declare class UsuarioService {
    findAllUsers(): Promise<{
        email: string;
        password: string;
        cedula: string;
        nombres: string;
        apellidos: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }[]>;
    findUserByCedula(cedula: string): Promise<{
        email: string;
        password: string;
        cedula: string;
        nombres: string;
        apellidos: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }>;
    updateUserByCedula(cedula: string, data: Partial<CreateUserDto>): Promise<{
        email: string;
        password: string;
        cedula: string;
        nombres: string;
        apellidos: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }>;
    deleteUserByCedula(cedula: string): Promise<{
        email: string;
        password: string;
        cedula: string;
        nombres: string;
        apellidos: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }>;
}
