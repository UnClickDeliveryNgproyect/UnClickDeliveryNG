import { Controller, Get } from '@nestjs/common';
import { BusinessService } from '../services/business.service';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  findAll() {
    return 'Este es el módulo de negocios hecho a mano';
  }
}
