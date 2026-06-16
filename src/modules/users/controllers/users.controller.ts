import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersDto } from '../dto/users.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 1. Obtener todos los usuarios (GET /api/v1/users)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  // 2. Crear un usuario (POST /api/v1/users)
  @Post()
  async create(@Body() createUserDto: UsersDto) {
    return this.usersService.create(createUserDto);
  }

  // 3. Obtener un usuario por ID (GET /api/v1/users/:id)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // 4. Actualizar un usuario por ID (PATCH /api/v1/users/:id)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateUserDto: UpdateUserDto
  ) {
    // Correcto: Delegamos la lógica pesada de la base de datos al servicio
    return this.usersService.update(id, updateUserDto);
  }

  // 5. Eliminar (Soft Delete) un usuario por ID (DELETE /api/v1/users/:id)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    // Correcto: Delegamos la baja al servicio
    return this.usersService.remove(id);
  }
}