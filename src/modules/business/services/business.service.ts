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
    return this.businessRepository.find();
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
