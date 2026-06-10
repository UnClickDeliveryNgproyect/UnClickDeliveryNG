import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class UsersDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail({}, { message: 'El correo electrónico prporcionado no es valido' })
  @IsNotEmpty({ message: 'El correo electronico es un campo obligatorio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es un campo obligatorio' })
  @MinLength(8, { message: 'La contraseña debe tener minimo 8 caracteres' })
  @MinLength(8, { message: 'La contraseña debe tener minimo 8 caracteres' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
    message:
      'La contraseña es insegura. Debe contener obligatoriamente: al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (ej: @, $, !, %, *, ?, &).',
  })
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;
}
