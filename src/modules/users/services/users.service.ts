<<<<<<< HEAD
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/users.entity";
=======
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

@Injectable()
export class UsersService {
  findAll() {
<<<<<<< HEAD
      throw new Error('Method not implemented.');
=======
    throw new Error('Method not implemented.');
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
  }

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: any) {
<<<<<<< HEAD

    const user = this.userRepository.create(data);

    return await this.userRepository.save(user);

=======
    const user = this.userRepository.create(data);

    return await this.userRepository.save(user);
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
  }

  async findByEmailOrUsername(
    email?: string,
    username?: string,
<<<<<<< HEAD
  ) {

    return await this.userRepository.findOne({
      where: [
        { email },
        { username },
      ],
    });

  }

=======
  ): Promise<User | null> {
    return await this.userRepository.findOne({
      where: [{ email }, { username }],
    });
  }
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
}
