import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from 'src/modules/Categories/entities/category.entity';
import { User } from '../../users/entities/users.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  logo_url: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'time', nullable: true })
  opening_time: string;

  @Column({ type: 'time', nullable: true })
  closing_time: string;

  @Column({ type: 'int', nullable: true })
  owner_id: number;

  @ManyToOne(() => User, (user) => user.ownedBusinesses)
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @OneToMany(() => User, (user) => user.business)
  employees: User[];

  @OneToMany(() => Category, (category) => category.business)
  categories: Category[];

  @OneToMany(() => Order, (order) => order.business)
  orders: Order[];
}
