import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Invoice } from '../entities/invoice.entity';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const invoice = this.invoiceRepository.create(createInvoiceDto);
    return await this.invoiceRepository.save(invoice);
  }

  async findAll() {
    return await this.invoiceRepository.find({
      relations: ['order'],
    });
  }

  async findOne(id: number) {
    return await this.invoiceRepository.findOne({
      where: { id },
      relations: ['order'],
    });
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    await this.invoiceRepository.update(id, updateInvoiceDto);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.invoiceRepository.delete(id);

    return {
      message: 'Invoice eliminada correctamente',
    };
  }
}
