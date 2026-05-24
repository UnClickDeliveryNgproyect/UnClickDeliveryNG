<<<<<<< HEAD
import { Controller, Get } from '@nestjs/common';
import { BusinessService } from '../services/business.service';
=======
import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusinessService } from '../services/business.service';
import { CreateBusinessDto } from '../dto/business.dto';
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
<<<<<<< HEAD
  findAll() {
    return 'Este es el módulo de negocios hecho a mano';
=======
  async findAll() {
    return await this.businessService.getAllBusinesses();
  }

  @Post()
  async create(@Body() createBusinessDto: CreateBusinessDto) {
    return await this.businessService.createBusiness(createBusinessDto as any);
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
  }
}
