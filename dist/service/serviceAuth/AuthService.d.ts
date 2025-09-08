import { AuthLoginDto } from 'dto/dtoAuth/AuthDto';
import { CreateUserDto } from 'dto/dtoUsuario/UsuarioDto';
export declare class AuthUserService {
    register(createUserDto: CreateUserDto): Promise<{
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
    login(authDto: AuthLoginDto): Promise<{
        token: string;
        user: {
            cedula: string;
            nombres: string;
            apellidos: string;
            email: string;
            password: string;
            telefono: string | null;
            redSocial: string | null;
            rol: string;
            createdAt: Date;
        };
    }>;
}
