import { Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':businessId')
  async findAllByBusiness(@Param('businessId') businessId: number) {
    return this.categoriesService.findAllByBusiness(businessId);
  }
  @Post()
  async create() {
    return this.categoriesService.createCategory();
  }
}
