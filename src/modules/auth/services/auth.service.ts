import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import * as jwt from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: jwt.JwtService,
  ) {}

  async register(data: any) {

    const hashedPassword =
      await bcrypt.hash(data.password, 10);

    const user =
      await this.usersService.create({
        ...data,
        password: hashedPassword,
      });

    return user;

  }

  async login(data: any) {

    const user =
      await this.usersService.findByEmailOrUsername(
        data.email,
        data.username,
      );

    if (!user) {
      throw new UnauthorizedException(
        'Usuario no encontrado',
      );
    }

    const isPasswordValid =
      await bcrypt.compare(
        data.password,
        user.password,
      );

    if (!isPasswordValid) {
      throw new UnauthorizedException(
        'Password incorrecto',
      );
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token:
        this.jwtService.sign(payload),
    };

  }

}