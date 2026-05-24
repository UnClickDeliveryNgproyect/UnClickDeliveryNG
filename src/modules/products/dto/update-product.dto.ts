import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
<<<<<<< HEAD

export class UpdateProductDto extends PartialType(CreateProductDto) {}
=======
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  //Actualizar producto, se heredan las propiedades de CreateProductDto y se vuelven opcionales
  @IsInt()
  @IsOptional()
  id?: number;

  @IsInt()
  @IsOptional()
  business_id?: number;

  @IsInt()
  @IsOptional()
  category_id?: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  image_url?: string;

  @IsOptional()
  is_active?: boolean;
}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
