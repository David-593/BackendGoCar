import { createUserDtoByAdmin } from "dto/dtoAdmin/AdminDto";
export declare class AdminService {
    register(createUserDtoByAdmin: createUserDtoByAdmin): Promise<{
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
