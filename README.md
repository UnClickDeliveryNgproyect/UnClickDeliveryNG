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
*git clone https://github.com/UnClickDeliveryNgproyect/UnClickDeliveryNG.git
2. Entrar al proyecto
*cd UnClickDeliveryNG
3. Descargar dependencia
*npm install
4. Editar el archivo .env (Para que el backend use el PostgreSQL)
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