import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAllByBusiness(businessId: number): Promise<Category[]> {
    return this.categoryRepository.find({
      where: { business: { id: businessId } },
      relations: ['business', 'products'],
    });
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: ['business', 'products'],
    });
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id },
      relations: ['business', 'products'],
    });
  }

  async create(createCategoryDto: any): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return (await this.categoryRepository.save(
      category,
    )) as unknown as Category;
  }

  async update(id: number, updateCategoryDto: any): Promise<Category> {
    await this.categoryRepository.update(id, updateCategoryDto);
    return this.findOne(id);
  }
}
