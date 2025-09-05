import { IsString, IsNumber, IsPositive, IsUrl } from 'class-validator';

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

  @IsUrl()
  imagenUrl: string;

  @IsString()
  contacto: string;
}
