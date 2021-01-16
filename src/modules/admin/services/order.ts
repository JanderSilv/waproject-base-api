import { Injectable } from '@nestjs/common';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';

import { OrderRepository } from '../repositories/order';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  public async save(model: IOrder): Promise<Order> {
    return this.create(model);
  }

  private async create(model: IOrder): Promise<Order> {
    const order = await this.orderRepository.insert(model);

    return order;
  }
}
