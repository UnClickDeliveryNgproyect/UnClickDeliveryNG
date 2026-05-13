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