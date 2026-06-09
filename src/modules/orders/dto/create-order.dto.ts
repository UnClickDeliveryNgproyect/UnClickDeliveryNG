import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, IsEnum } from 'class-validator';
import { PaymentMethod, OrderStatus } from '../enums';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  total_amount: number;

  @ApiProperty({
    enum: OrderStatus,
    enumName: 'OrderStatus',
    description:
      'Order status: pending, confirmed, in_transit, delivered, cancelled, returned',
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @ApiProperty()
  @IsNumber()
  delivery_latitude: number;

  @ApiProperty()
  @IsNumber()
  delivery_longitude: number;

  @ApiProperty()
  @IsString()
  delivery_address: string;

  @ApiProperty({
    default: PaymentMethod.CASH_ON_DELIVERY,
    description: 'Payment method: cash_on_delivery (pago contra entrega)',
  })
  payment_method?: PaymentMethod;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  business_id?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  client_id?: number;
}
