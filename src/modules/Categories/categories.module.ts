import { Module } from "@nestjs/common";
import { Category } from "./entities/category.entity";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { ConfigModule } from "@nestjs/config/dist/config.module";
import { CategoriesController } from "./controllers/categories.controller";
import { CategoriesService } from "./services/categories.service";


@Module({
    imports: [
    TypeOrmModule.forFeature([Category]),
    ConfigModule.forRoot(),
    ],
    controllers: [CategoriesController],
    providers: [CategoriesService],
    exports: [CategoriesService],
})
export class CategoriesModule {}
