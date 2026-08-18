import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'El nombre de usuario debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre de usuario es requerido' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  password: string;
}
