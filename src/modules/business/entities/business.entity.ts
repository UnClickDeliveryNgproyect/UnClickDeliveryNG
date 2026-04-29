import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../Categories/entities/category.entity";
import { Product } from "../../products/entities/product.entity";

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Category, (category) => category.business)
  categories: Category[];

  @OneToMany(() => Product, (product) => product.business)
  products: Product[];
}