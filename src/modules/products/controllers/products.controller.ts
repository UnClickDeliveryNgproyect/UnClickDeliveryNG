<<<<<<< HEAD
import { Controller } from "@nestjs/common";


@Controller("products")
export class ProductController {}
=======
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
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
