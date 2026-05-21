import { Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return await this.productsService.getAllProducts();
  }

  @Post()
  async create() {
    return await this.productsService.createProduct();
  }
}
