import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
//import { config } from 'process'; // No es necesario importar 'config' de 'process' para acceder a las variables de entorno por eso se descarta
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { BusinessModule } from './modules/business/business.module';
import { ProductModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/Categories/categories.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    BusinessModule,
    CategoriesModule,
    ProductModule,
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
