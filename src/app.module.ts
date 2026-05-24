import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { BusinessModule } from './modules/business/business.module';
import { ProductModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/Categories/categories.module';

import { InvoicesModule } from './modules/invoices/invoices.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    BusinessModule,
    CategoriesModule,
    ProductModule,
    InvoicesModule,

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
