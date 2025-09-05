import { AuthLoginDto } from 'dto/dtoAuth/AuthDto';
import { CreateUserDto } from 'dto/dtoUsuario/UsuarioDto';
export declare class AuthUserService {
    register(createUserDto: CreateUserDto): Promise<{
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
    login(authDto: AuthLoginDto): Promise<{
        token: string;
        user: {
            email: string;
            password: string;
            cedula: string;
            nombres: string;
            apellidos: string;
            telefono: string | null;
            redSocial: string | null;
            rol: string;
            createdAt: Date;
        };
    }>;
}
