import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  image_url?: string;

  @IsInt()
  business_id: number;

  @IsInt()
  category_id: number;
<<<<<<< HEAD
}
=======
}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
