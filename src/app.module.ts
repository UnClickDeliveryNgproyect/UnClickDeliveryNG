import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
<<<<<<< HEAD
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

=======
//import { config } from 'process'; // No es necesario importar 'config' de 'process' para acceder a las variables de entorno por eso se descarta
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
import { AuthModule } from './modules/auth/auth.module';
import { BusinessModule } from './modules/business/business.module';
import { ProductModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/Categories/categories.module';
<<<<<<< HEAD

import { InvoicesModule } from './modules/invoices/invoices.module';
=======
import { OrdersModule } from './modules/orders/orders.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

@Module({
  imports: [
    AuthModule,
    UsersModule,
    BusinessModule,
    CategoriesModule,
    ProductModule,
<<<<<<< HEAD
    InvoicesModule,

=======
    OrdersModule,
    OrderItemsModule,
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
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
<<<<<<< HEAD

  controllers: [],

=======
  controllers: [],
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
  providers: [],
})
export class AppModule {}
