import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductCard } from '../';
import { Product } from '../../utils/api';

const testProps: Product = {
  id: 1,
  title: 'Test title',
  description: 'Test description',
  price: 333,
  discountPercentage: 10,
  rating: 4,
  stock: 66,
  brand: 'Test brand',
  category: 'Test category',
  images: ['https://i.dummyjson.com/data/products/1/1.jpg'],
};

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<ProductCard {...testProps} />);
    const link = screen.getByRole('link');
    fireEvent.click(link);
  });
  test('should first', () => {
    const btns = screen.getAllByRole('button').length;
    expect(btns).toEqual(2);
  });
});
