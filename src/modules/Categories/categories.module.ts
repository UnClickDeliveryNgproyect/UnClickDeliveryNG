import { Module } from "@nestjs/common";
import { Category } from "./entities/category.entity";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { ConfigModule } from "@nestjs/config/dist/config.module";


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
//