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
  // @PrimaryGeneratedColumn('increment', {type: 'int4'}) // no es necesario todo eso especifico, la primary lo hace sin necesidad de especifica.
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

  // Los que simulan parte del CRUD son datos para llevar un registro en puntos importantes que se crean donde las tablas se relacionan mucho con otras, asi tener un registro de fecha y hora, mas autores de dicho cambio
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  // src/modules/users/entities/users.entity.ts

  @DeleteDateColumn({ type: 'timestamp', nullable: true }) // Quita el default () => 'CURRENT_TIMESTAMP'
  deleted_at: Date;

  // Relación: Un usuario puede pertenecer a un negocio (si es empleado)
  @ManyToOne(() => Business, (business) => business.employees, {
    nullable: true,
  })
  @JoinColumn({ name: 'business_id' })
  business: Business;

  // Relación: Un usuario puede tener múltiples órdenes como cliente
  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];

  // Relación: Un usuario puede ser propietario de un negocio
  @OneToMany(() => Business, (business) => business.owner)
  ownedBusinesses: Business[];

  // Relación: Un usuario puede ser repartidor de múltiples órdenes
  @OneToMany(() => Order, (order) => order.driver)
  deliveries: Order[];
}
