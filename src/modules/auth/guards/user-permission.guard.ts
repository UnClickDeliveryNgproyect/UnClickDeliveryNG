import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { META_PERMISSIONS } from '../decorator/permission-protected.decorator';

@Injectable()
export class UserPermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(
      META_PERMISSIONS,
      context.getHandler(),
    );

    if (!permissions || permissions.length === 0) {
      return true;
    }

    const req = context.switchToHttp().getRequest();

    const user = req.user;

    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    const userPermissions =
      user.role?.permissions?.map((permission) => permission.name) || [];

    const hasPermissions = permissions.every((permission) =>
      userPermissions.includes(permission),
    );

    if (!hasPermissions) {
      throw new ForbiddenException('No tiene permisos suficientes');
    }

    return true;
  }
}
