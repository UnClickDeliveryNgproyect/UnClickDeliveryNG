import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('permissions')
export class Permission {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  module: string;

  @ManyToMany(
    () => Role,
    role => role.permissions,
  )
  roles: Role[];
}