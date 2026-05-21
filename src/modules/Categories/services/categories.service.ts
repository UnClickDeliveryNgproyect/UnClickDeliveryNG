import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  createCategory() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAllByBusiness(businessId: number): Promise<Category[]> {
    return this.categoryRepository.find({
      where: { business: { id: businessId } },
    });
  }
}
