import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
<<<<<<< HEAD
=======
    UsersModule,
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
    ConfigModule.forRoot(),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
<<<<<<< HEAD

=======
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
