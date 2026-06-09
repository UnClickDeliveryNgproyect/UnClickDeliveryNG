import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
  invoice_number: string;

  @Column({ nullable: true })
  pdf_url: string;

  @CreateDateColumn()
  generated_at: Date;

  // Relación: Una factura pertenece a una orden
  @ManyToOne(() => Order, (order) => order.invoice)
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
