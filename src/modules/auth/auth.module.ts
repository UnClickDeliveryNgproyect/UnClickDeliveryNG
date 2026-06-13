import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserPermissionGuard } from './guards/user-permission.guard';

import { UsersModule } from '../users/users.module';

import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserRoleGuard } from './guards/user-role.guard';

@Module({
  imports: [
    UsersModule,

    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    JwtModule.register({
      secret: 'secretKey123',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
    UserRoleGuard,
    UserPermissionGuard,
  ],

  exports: [
    PassportModule,
    JwtModule,
    JwtStrategy,
    UserPermissionGuard,
  ],
})
export class AuthModule {}