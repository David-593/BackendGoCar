import { IsEmail, IsOptional, IsString } from "class-validator";

export class createUserDtoByAdmin{
    @IsString()
    cedula: string;

    @IsString()
    nombres: string;

    @IsString()
    apellidos: string;

    @IsString()
    rol: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    telefono?: string;

    @IsString()
    @IsOptional()
    redSocial?: string;
}