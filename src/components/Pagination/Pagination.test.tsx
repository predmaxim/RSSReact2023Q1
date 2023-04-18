import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import { renderWithProviders } from '../../utils/tests/test-utils';

describe('Pagination tests', () => {
  beforeEach(() => {
    renderWithProviders(<Pagination />);
  });

  test('Recieved Pages', async () => {
    const pagesShouldBe = 4;
    const pages = (await screen.findAllByRole('button')).length;
    expect(pages).toEqual(pagesShouldBe);
  });
});
