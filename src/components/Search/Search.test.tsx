import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { Search } from './Search';
import { renderWithProviders } from '../../utils/test-utils';

describe('Pagination tests', () => {
  beforeEach(() => {
    renderWithProviders(<Search />);
  });

  test('Search should be rendered', async () => {
    expect(screen.getByPlaceholderText(/search/i)).toBeDefined();
  });
});
