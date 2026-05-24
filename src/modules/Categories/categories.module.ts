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
<<<<<<< HEAD
export class CategoriesModule {}
=======
export class CategoriesModule {}
//
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
