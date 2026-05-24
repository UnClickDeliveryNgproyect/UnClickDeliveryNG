import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return await this.productsService.getAllProducts();
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.createProduct();
  }
}
