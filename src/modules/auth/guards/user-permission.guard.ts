import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
authAndUsers
import { META_PERMISSIONS } from '../decorator/permission-protected.decorator';

@Injectable()
export class UserPermissionGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(META_PERMISSIONS, context.getHandler());
import { META_PERMISSIONS } from '../decorator/permission-protected.decorator';

@Injectable()
export class UserPermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(
      META_PERMISSIONS,
      context.getHandler(),
    );
main

    if (!permissions || permissions.length === 0) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
 authAndUsers

   main
    const user = req.user;

    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

 authAndUsers
    
    if (user.role === 'admin') return true;

   
    const userPermissions: string[] = []; 
    
    const hasPermissions = permissions.every(permission =>

    const userPermissions =
      user.role?.permissions?.map((permission) => permission.name) || [];

    const hasPermissions = permissions.every((permission) =>
   main
      userPermissions.includes(permission),
    );

    if (!hasPermissions) {
 authAndUsers
      throw new ForbiddenException('No tiene permisos suficientes para este módulo de Unclick Delivery NG');

      throw new ForbiddenException('No tiene permisos suficientes');
 main
    }

    return true;
  }
}
