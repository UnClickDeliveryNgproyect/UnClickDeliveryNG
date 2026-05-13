import { Module } from "@nestjs/common";
import { Category } from "./entities/category.entity";
import { TypeOrmModule } from "@nestjs/typeorm"; 
import { ConfigModule } from "@nestjs/config"; 


@Module({
    imports: [
    TypeOrmModule.forFeature([Category]),
    ConfigModule.forRoot(),
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class CategoriesModule {}