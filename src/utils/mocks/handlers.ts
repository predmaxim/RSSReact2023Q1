import { rest } from 'msw';
import products from './mocks';

export const handlers = [
  rest.get('https://dummyjson.com/products/search', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
];
