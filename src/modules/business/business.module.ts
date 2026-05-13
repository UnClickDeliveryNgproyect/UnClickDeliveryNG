import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessService } from './services/business.service';
import { BusinessController } from './controllers/business.controller';
import { Business } from './entities/business.entity';
import { Category } from '../Categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Business, Category])],
  controllers: [BusinessController],
  providers: [BusinessService],
  exports: [BusinessService],
})
export class BusinessModule {}
