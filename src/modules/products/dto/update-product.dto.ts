import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
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
