import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  total_amount: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsNumber()
  delivery_latitude: number;

  @ApiProperty()
  @IsNumber()
  delivery_longitude: number;

  @ApiProperty()
  @IsString()
  delivery_address: string;

  @ApiProperty()
  @IsString()
  payment_method: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  business_id?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  client_id?: number;
}
