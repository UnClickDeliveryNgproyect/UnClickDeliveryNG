// src/modules/users/dto/update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from '../../auth/dto/register.dto'; // O donde tengas tu UsersDto / RegisterDto

export class UpdateUserDto extends PartialType(RegisterDto) {}
