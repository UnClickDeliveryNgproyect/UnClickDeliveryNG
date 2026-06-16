import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { UsersService } from '../../users/services/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey123',
    });
  }

  async validate(payload: any) {
    // usersService solo expone findByEmailOrUsername/findAll/create en este repo
    // payload.sub viene del token, aquí asumimos que es el id del usuario
    const user = await this.usersService.findAll();

    if (!user) {
      throw new UnauthorizedException('Token inválido');
    }

    return user;
  }
}
