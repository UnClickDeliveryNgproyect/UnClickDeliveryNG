import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { META_PERMISSIONS } from '../decorator/permission-protected.decorator'; // Verifica tus carpetas

@Injectable()
export class UserPermissionGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(META_PERMISSIONS, context.getHandler());

    if (!permissions || permissions.length === 0) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    // Lógica simplificada basada en tu propiedad role string:
    // Si es administrador del ecosistema multi-productos, le otorgamos acceso total
    if (user.role === 'admin') return true;

    // Puedes mapear permisos básicos por defecto según el rol string si lo requieres
    const userPermissions: string[] = []; 
    
    const hasPermissions = permissions.every(permission =>
      userPermissions.includes(permission),
    );

    if (!hasPermissions) {
      throw new ForbiddenException('No tiene permisos suficientes para este módulo de Unclick Delivery NG');
    }

    return true;
  }
}