<<<<<<< HEAD
import { IsString,IsNotEmpty, IsNumber } from 'class-validator';
=======
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  business_id: number;
}
