import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Business } from '../../business/entities/business.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  business_id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  role: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;


  @DeleteDateColumn({ type: 'timestamp', nullable: true }) 
  deleted_at: Date;

  @ManyToOne(() => Business, (business) => business.employees, {
    nullable: true,
  })
  @JoinColumn({ name: 'business_id' })
  business: Business;

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];

  @OneToMany(() => Business, (business) => business.owner)
  ownedBusinesses: Business[];

  @OneToMany(() => Order, (order) => order.driver)
  deliveries: Order[];
}
