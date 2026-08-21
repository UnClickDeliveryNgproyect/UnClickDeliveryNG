import { Business } from '../../business/entities/business.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  business_id: number;

  @ManyToOne(() => Business, (business) => business.categories)
  @JoinColumn({ name: 'business_id' })
  business: Business;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
