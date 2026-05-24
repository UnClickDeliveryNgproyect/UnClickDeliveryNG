import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unit_price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal: number;

  @Column({ type: 'int', nullable: true })
  order_id: number;

  @Column({ type: 'int', nullable: true })
  product_id: number;
}
