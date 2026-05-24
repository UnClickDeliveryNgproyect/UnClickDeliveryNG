import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from '../entities/order-item.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemsRepository: Repository<OrderItem>,
  ) {}

  async create(createOrderItemDto: any) {
    const orderItem = this.orderItemsRepository.create(createOrderItemDto);
    return this.orderItemsRepository.save(orderItem);
  }

  async findAll() {
    return this.orderItemsRepository.find();
  }

  async findOne(id: number) {
    return this.orderItemsRepository.findOneBy({ id });
  }

  async update(id: number, updateOrderItemDto: any) {
    const orderItem = await this.orderItemsRepository.preload({
      id,
      ...updateOrderItemDto,
    });
    if (!orderItem) {
      throw new Error(`Order item #${id} not found`);
    }
    return this.orderItemsRepository.save(orderItem);
  }

  async remove(id: number) {
    const orderItem = await this.findOne(id);
    return this.orderItemsRepository.remove(orderItem);
  }
}
