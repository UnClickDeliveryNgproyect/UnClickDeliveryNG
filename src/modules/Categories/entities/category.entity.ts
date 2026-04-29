import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Business } from '../../business/entities/business.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  business_id: number;

  @ManyToOne(() => Business, (business) => business.categories)
  business: Business;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
