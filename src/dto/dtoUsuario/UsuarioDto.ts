import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    cedula: string;

    @IsString()
    nombres: string;

    @IsString()
    apellidos: string;

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