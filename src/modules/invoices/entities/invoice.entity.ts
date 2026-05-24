import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
  invoice_number: string;

  @Column({ nullable: true })
  pdf_url: string;

  @CreateDateColumn()
  generated_at: Date;
}