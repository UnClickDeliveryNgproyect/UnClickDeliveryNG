import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity'; // Ajusta la ruta según tus carpetas
import { UsersDto } from '../dto/users.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    // ¡ESTA ES LA INYECCIÓN CORRECTA DEL REPOSITORIO!
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: UsersDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  async findByEmailOrUsername(email: string, username: string) {
    // Tu lógica actual para buscar por email o username
    return await this.userRepository.findOne({
      where: [
        { email: email },
        { username: username }
      ]
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    // Usamos el userRepository aquí, de forma interna en el servicio
    const updatedUser = this.userRepository.merge(user, updateUserDto);
    return await this.userRepository.save(updatedUser);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    // Soft delete usando el repositorio de TypeORM
    await this.userRepository.softRemove(user);
    return {
      message: `El usuario con ID ${id} ha sido desactivado correctamente del sistema Unclick Delivery NG`,
    };
  }
}