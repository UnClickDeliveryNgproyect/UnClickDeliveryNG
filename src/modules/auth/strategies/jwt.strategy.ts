import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey123', // Asegúrate de usar una variable de entorno en producción
    });
  }

  async validate(payload: any) {
    // Corregido: cambiamos payload.sub por payload.id que es el que firmas en auth.service
    const user = await this.usersService.findOne(payload.id);

    if (!user) {
      throw new UnauthorizedException('Token inválido o usuario no existente');
    }

    return user;
  }
}