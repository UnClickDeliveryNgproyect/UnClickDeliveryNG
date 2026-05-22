import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  //total amount
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;

  //order status
  @Column({ type: 'varchar', length: 255 })
  status: string;

  //delivery latitude
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  delivery_latitude: number;

  //delivery longitude
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  delivery_longitude: number;

  //delivery address
  @Column({ type: 'varchar', length: 255 })
  delivery_address: string;
  //payment method
  @Column({ type: 'varchar', length: 255 })
  payment_method: string;

  //created at
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'int', nullable: true })
  business_id: number;

  @Column({ type: 'int', nullable: true })
  client_id: number;
}
