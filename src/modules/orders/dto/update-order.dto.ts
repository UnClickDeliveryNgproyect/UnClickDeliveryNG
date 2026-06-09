import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, IsEnum } from 'class-validator';
import { PaymentMethod, OrderStatus } from '../enums';

export class UpdateOrderDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  total_amount?: number;

  @ApiPropertyOptional({
    enum: OrderStatus,
    enumName: 'OrderStatus',
    description:
      'Order status: pending, confirmed, in_transit, delivered, cancelled, returned',
  })
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  delivery_latitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  delivery_longitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  delivery_address?: string;

  @ApiPropertyOptional({
    default: PaymentMethod.CASH_ON_DELIVERY,
    description: 'Payment method: cash_on_delivery (pago contra entrega)',
  })
  @IsOptional()
  payment_method?: PaymentMethod;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  business_id?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  client_id?: number;
}
