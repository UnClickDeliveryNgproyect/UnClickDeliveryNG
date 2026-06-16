import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
 authAndUsers
import { META_ROLES } from '../decorator/role-protected.decorator';

import { META_ROLES } from '../decorator/role-protected.decorator';
 main

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

 authAndUsers
  constructor(
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(META_ROLES, context.getHandler());

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(
      META_ROLES,
      context.getHandler(),
    );
 main

    if (!roles || roles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
 authAndUsers


 main
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Usuario no autenticado');
    }

   
    if (roles.includes(user.role)) {
      return true;
    }

    throw new ForbiddenException(`El usuario requiere uno de los siguientes roles: [${roles}]`);
  }
}
