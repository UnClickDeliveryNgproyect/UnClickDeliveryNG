import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './services/orders.service';
import { PaymentService } from './services/payment.service';
import { OrdersController } from './controllers/orders.controller';
import { Order } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService, PaymentService],
  exports: [PaymentService],
})
export class OrdersModule {}
