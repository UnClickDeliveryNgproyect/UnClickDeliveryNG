import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderItemDto } from './create-order-item.dto';
import { IsNumber } from 'class-validator';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  unit_price: number;

  @ApiProperty()
  @IsNumber()
  subtotal: number;

  @ApiProperty()
  @IsNumber()
  order_id: number;

  @ApiProperty()
  @IsNumber()
  product_id: number;
}
