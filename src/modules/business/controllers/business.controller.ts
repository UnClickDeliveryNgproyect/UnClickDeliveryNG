import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusinessService } from '../services/business.service';
import { CreateBusinessDto } from '../dto/business.dto';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async findAll() {
    return await this.businessService.getAllBusinesses();
  }

  @Post()
  async create(@Body() createBusinessDto: CreateBusinessDto) {
    return await this.businessService.createBusiness(createBusinessDto as any);
  }
}
