import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: any) {
    const user = this.userRepository.create(data);

    return await this.userRepository.save(user);
  }

  async findByEmailOrUsername(email?: string, username?: string) {
    return await this.userRepository.findOne({
      where: [{ email }, { username }],
    });
  }
}
