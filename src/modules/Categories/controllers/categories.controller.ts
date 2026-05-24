<<<<<<< HEAD
import { Controller } from "@nestjs/common";


@Controller("categories")
export class CategoriesController {}
=======
import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':businessId')
  async findAllByBusiness(@Param('businessId') businessId: number) {
    return this.categoriesService.findAllByBusiness(businessId);
  }
}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
