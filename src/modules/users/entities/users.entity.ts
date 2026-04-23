import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
} from "typeorm";

@Entity()
export class User {
    // @PrimaryGeneratedColumn('increment', {type: 'int4'}) // no es necesario todo eso especifico, la primary lo hace sin necesidad de especifica.
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    role: string;

    // Los que simulan parte del CRUD son datos para llevar un registro en puntos importantes que se crean donde las tablas se relacionan mucho con otras, asi tener un registro de fecha y hora, mas autores de dicho cambio
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    deleted_at: Date;
}
