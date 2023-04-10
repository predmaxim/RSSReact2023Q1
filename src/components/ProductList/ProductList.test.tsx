import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductList } from './ProductList';
import { searchProducts } from '../../utils/api';

describe('ProductCard test', async () => {
  const products = await searchProducts({ limit: 0 });

  beforeEach(() => {
    render(<ProductList products={products} />);
  });

  test('Should show title', async () => {
    const data = screen.getAllByRole('heading').length;
    expect(data).toEqual(100);
  });
});
