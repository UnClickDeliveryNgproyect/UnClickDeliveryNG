import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { PaymentMethod, OrderStatus } from '../enums';
import { User } from '../../users/entities/users.entity';
import { OrderItem } from '../../order-items/entities/order-item.entity';
import { Business } from '../../business/entities/business.entity';
import { Invoice } from '../../invoices/entities/invoice.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  //total amount
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;

  //order status
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  //delivery latitude
  @Column({ type: 'decimal', precision: 10, scale: 8 })
  delivery_latitude: number;

  //delivery longitude
  @Column({ type: 'decimal', precision: 10, scale: 8 })
  delivery_longitude: number;

  //delivery address
  @Column({ type: 'varchar', length: 255 })
  delivery_address: string;
  //payment method
  @Column({
    type: 'enum',
    enum: PaymentMethod,
    default: PaymentMethod.CASH_ON_DELIVERY,
  })
  payment_method: PaymentMethod;

  //created at
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'int', nullable: true })
  business_id: number;

  @Column({ type: 'int', nullable: true })
  client_id: number;

  // Relación: Una orden pertenece a un negocio
  @ManyToOne(() => Business, (business) => business.orders)
  @JoinColumn({ name: 'business_id' })
  business: Business;

  // Relación: Una orden pertenece a un usuario cliente
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'client_id' })
  client: User;

  @Column({ type: 'int', nullable: true })
  driver_id: number;

  // Relación: Una orden puede ser entregada por un repartidor (usuario con rol 'driver')
  @ManyToOne(() => User)
  @JoinColumn({ name: 'driver_id' })
  driver: User;

  // Relación: Una orden contiene múltiples items
  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];

  // Relación: Una orden tiene una factura
  @OneToMany(() => Invoice, (invoice) => invoice.order)
  invoice: Invoice[];
}
