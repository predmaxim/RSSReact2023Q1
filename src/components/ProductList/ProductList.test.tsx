import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { ProductList } from './ProductList';
import { renderWithProviders } from '../../utils/tests/test-utils';

describe('ProductList tests', () => {
  beforeEach(() => {
    renderWithProviders(<ProductList />);
  });

  test('Recieved productList length', async () => {
    const productList = await screen.findAllByRole('heading');
    expect(productList.length).toEqual(8);
  });
});
