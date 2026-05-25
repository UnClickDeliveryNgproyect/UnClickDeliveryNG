import { Business } from 'src/modules/business/entities/business.entity';
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

  @Column({ type: 'int', nullable: true })
  business_id: number;

  // Relación: Una categoría pertenece a un negocio
  @ManyToOne(() => Business, (business) => business.categories)
  @JoinColumn({ name: 'business_id' })
  business: Business;

  // Relación: Una categoría contiene múltiples productos
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
