<<<<<<< HEAD
import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ConfigModule } from "@nestjs/config/dist/config.module";


@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        ProductModule,
        ConfigModule.forRoot(),
    
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class ProductModule {}
=======
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ProductModule,
    ConfigModule.forRoot(),
  ],
  controllers: [ProductController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductModule {}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
