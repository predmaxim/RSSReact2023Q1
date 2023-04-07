import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';
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
  });

  test('Should show title', () => {
    expect(screen.getByText(testProps.title)).toBeDefined();
  });

  test('Should show description', () => {
    expect(screen.getByText(testProps.description)).toBeDefined();
  });

  test('Should show image', () => {
    expect(screen.getByRole('img')).toBeDefined();
  });

  test('Should show image alt', () => {
    expect(screen.getByText(testProps.title)).toBeDefined();
  });

  test('Should show image alt', () => {
    const link = screen.getByRole('link');
    fireEvent.click(link);
    const btns = screen.getAllByRole('button').length;
    expect(btns).toEqual(2);
  });
});
