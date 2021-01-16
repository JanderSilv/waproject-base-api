import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<void> {
  if (!IS_DEV) return;

  const users = await knex
    .count()
    .from('Order')
    .first();

  if (Number(users.count) > 0) return;

  for (let x = 0; x < 100; x++) {
    const order: IOrder = {
      description: faker.commerce.productName(),
      quantity: faker.random.number({ min: 0, max: 20 }),
      value: parseFloat(faker.commerce.price()),
      createdDate: new Date(),
      updatedDate: new Date()
    };

    await knex.insert(order).into('Order');
  }
}
