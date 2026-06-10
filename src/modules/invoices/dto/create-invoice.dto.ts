import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateInvoiceDto {
  @IsNumber()
  order_id: number;

  @IsString({ message: 'El número de factura debe ser un texto.' })
  @IsNotEmpty({ message: 'El número de factura es obligatorio.' })
  @MaxLength(50, {
    message: 'El número de factura no puede superar los 50 caracteres.',
  })
  invoice_number: string;

  @IsUrl(
    {},
    {
      message:
        'El campo pdf_url debe ser un enlace URL válido (ej: https://storage.com/factura.pdf).',
    },
  )
  @IsString()
  @IsNotEmpty({ message: 'La URL del PDf es obligatorio' })
  pdf_url?: string;
}
