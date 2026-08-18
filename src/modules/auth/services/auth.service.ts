import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      const hashedPassword = bcrypt.hashSync(registerDto.password, 10);

      const userResult = await this.usersService.create({
        ...registerDto,
        password: hashedPassword,
      });

      const user = Array.isArray(userResult) ? userResult[0] : userResult;

      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;

      return {
        ...userWithoutPassword,
        token: this.getJwtToken(user.id),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmailOrUsername(
      loginDto.username,
      loginDto.username,
    );

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const validPassword = bcrypt.compareSync(loginDto.password, user.password);

    if (!validPassword) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;

    return {
      ...userWithoutPassword,
      token: this.getJwtToken(user.id),
    };
  }

  private getJwtToken(id: number) {
    return this.jwtService.sign({ id });
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException('El usuario o correo ya existe');
    }
    console.log(error);
    throw new InternalServerErrorException('Error interno del servidor');
  }
}
