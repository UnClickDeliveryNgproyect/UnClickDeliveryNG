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

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  invoice_number: string;

  @Column({ type: 'varchar', length: 500, nullable: false })
  pdf_url: string;

  @CreateDateColumn()
  generated_at: Date;

  @ManyToOne(() => Order, (order) => order.invoice)
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
