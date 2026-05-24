<<<<<<< HEAD
import { Category } from "../../Categories/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Business } from "../../business/entities/business.entity";
=======
import { Category } from '../../Categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Business } from '../../business/entities/business.entity';
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  image_url: string;

  @Column({ default: true })
<<<<<<< HEAD
  is_available: boolean;  
=======
  is_available: boolean;
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

  @Column()
  business_id: number;
  @Column()
<<<<<<< HEAD
  category_id: number; 
=======
  category_id: number;
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
  // Relaciones
  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  business: Business;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
<<<<<<< HEAD
}
=======
}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
