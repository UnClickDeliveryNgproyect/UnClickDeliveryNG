import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  // @PrimaryGeneratedColumn('increment', {type: 'int4'}) // no es necesario todo eso especifico, la primary lo hace sin necesidad de especifica.
  @PrimaryGeneratedColumn()
  id: number;

<<<<<<< HEAD
    @Column({ type: 'varchar', length: 50, unique: true })
    username: string;
=======
  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

<<<<<<< HEAD
    @Column({ type: 'varchar', length: 255 })
    password: string;
=======
  @Column({ type: 'varchar', length: 255 })
  password: string;
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

  @Column({ type: 'varchar', length: 50 })
  role: string;

  // Los que simulan parte del CRUD son datos para llevar un registro en puntos importantes que se crean donde las tablas se relacionan mucho con otras, asi tener un registro de fecha y hora, mas autores de dicho cambio
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

<<<<<<< HEAD
    // src/modules/users/entities/users.entity.ts

    @DeleteDateColumn({ type: 'timestamp', nullable: true }) // Quita el default () => 'CURRENT_TIMESTAMP'
    deleted_at: Date;
=======
  // src/modules/users/entities/users.entity.ts

  @DeleteDateColumn({ type: 'timestamp', nullable: true }) // Quita el default () => 'CURRENT_TIMESTAMP'
  deleted_at: Date;
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
}
