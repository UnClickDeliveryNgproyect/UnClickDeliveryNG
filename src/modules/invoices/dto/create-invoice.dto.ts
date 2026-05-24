import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsNumber()
  order_id: number;

  @IsString()
  invoice_number: string;

  @IsOptional()
  @IsString()
  pdf_url?: string;
}