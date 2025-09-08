import { createUserDtoByAdmin } from "dto/dtoAdmin/AdminDto";
export declare class AdminService {
    register(createUserDtoByAdmin: createUserDtoByAdmin): Promise<{
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
    deleteUser(cedula: string): Promise<{
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
