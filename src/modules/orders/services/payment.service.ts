import { Injectable } from '@nestjs/common';
import { PaymentMethod } from '../enums/payment-method.enum';

@Injectable()
export class PaymentService {
  getPaymentMethodDescription(): string {
    return 'Pago contra entrega (efectivo)';
  }

  getDefaultPaymentMethod(): PaymentMethod {
    return PaymentMethod.CASH_ON_DELIVERY;
  }
}
