# UnClickDeliveryNG

Plataforma web multi-negocio para la gestión integral de ventas y entregas a domicilio

## Tecnologia utilizada
Framework: NestJS
Base de datos: PostgreSQL
ORM: TypeORM

## Equipo de desarrollo
*Joel Pauth
*Luis Fernando
*Luis González

## Pasos para trabajar el proyecto

1. Clonar el repositorio
2. Entrar al proyecto
*cd UnClickDeliveryNG
3. Instalar dependencias
*npm install
4. Crear el archivo .env a partir de .env.example y configurar PostgreSQL y JWT_SECRET
5. Crear la base de datos
6. Asegurar estar en la rama principal para trabajar el proyecto
*git checkout principal
*git pull origin principal
7. Crear una nueva rama para trabajar un modulo o un arreglo del proyecto
*git checkout -b feature/modulo-reportes o modulo-arreglo
8. levantar el proyecto
*npm run start:dev
9. Agrega todos los archivos modificados
git add .

10. Ponle un mensaje claro a tu paquete de cambios
git commit -m "feat: agrega el controlador y servicio de reportes"

11. Sube tu rama a GitHub
git push origin feature/modulo-reportes o modulo-arreglo

## Correcciones recientes

- Se corrigieron errores en los guards de autenticación (`UserRoleGuard`, `UserPermissionGuard`).
- Se solucionaron advertencias de lint en `AuthService`.
- Se añadió un archivo de ejemplo `.env.example` con las variables necesarias para la base de datos.

## Siguientes pasos para poner en producción

1. Crear una base de datos PostgreSQL y configurar las variables en `.env` (usar `.env.example` como referencia).
2. Instalar dependencias: `npm install` (o `npm ci` para una instalación exacta desde `package-lock.json`).
3. Compilar: `npm run build`.
4. Ejecutar en producción: `npm run start:prod` o usar un proceso administrativo como PM2 / Docker.