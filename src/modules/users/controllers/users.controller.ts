import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersDto } from '../dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: UsersDto) {
    return this.usersService.create(createUserDto);
  }
}
