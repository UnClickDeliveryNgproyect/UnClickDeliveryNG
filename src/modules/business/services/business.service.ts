import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from '../entities/business.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>,
  ) {}

  async createBusiness(business: Business): Promise<Business> {
    return this.businessRepository.save(business);
  }

  async getAllBusinesses(): Promise<Business[]> {
    return this.businessRepository.find({
      relations: ['owner', 'employees', 'categories', 'orders'],
    });
  }

  async getBusinessById(id: number): Promise<Business> {
    return this.businessRepository.findOne({
      where: { id },
      relations: ['owner', 'employees', 'categories', 'orders'],
    });
  }
}
