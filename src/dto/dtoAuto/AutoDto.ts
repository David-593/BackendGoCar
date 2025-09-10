import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateAutoDto {
  @IsString()
  vendedorCedula: string; 

  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsNumber()
  @IsPositive()
  año: number;

  @IsNumber()
  @IsPositive()
  precio: number;

  @IsNumber()
  @IsPositive()
  kilometraje: number;

  @IsString()
  color: string;

  @IsString()
  descripcion: string;

  @IsString()
  imagenUrl: string;
  @IsString()
  estado?: string; // DISPONIBLE o VENDIDO

  @IsString()
  contacto: string;
}
