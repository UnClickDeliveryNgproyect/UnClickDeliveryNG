<<<<<<< HEAD
export class RegisterDto {

  username: string;

  email: string;

  password: string;

}
=======
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
