import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create() {
    return this.usersService.create({
      email: '',
      username: '',
      password: '',
    });
  }
}
