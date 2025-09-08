import { CreateUserDto } from "../../dto/dtoUsuario/UsuarioDto";
export declare class UsuarioService {
    findAllUsers(): Promise<{
        cedula: string;
        nombres: string;
        apellidos: string;
        email: string;
        password: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }[]>;
    findUserByCedula(cedula: string): Promise<{
        cedula: string;
        nombres: string;
        apellidos: string;
        email: string;
        password: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }>;
    updateUserByCedula(cedula: string, data: Partial<CreateUserDto>): Promise<{
        cedula: string;
        nombres: string;
        apellidos: string;
        email: string;
        password: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }>;
    deleteUserByCedula(cedula: string): Promise<{
        cedula: string;
        nombres: string;
        apellidos: string;
        email: string;
        password: string;
        telefono: string | null;
        redSocial: string | null;
        rol: string;
        createdAt: Date;
    }>;
}
