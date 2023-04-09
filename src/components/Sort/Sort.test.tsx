/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Sort } from './Sort';
import { sortTypeProps, sortProps } from 'utils/api/api.props';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(
      <Sort
        setSortType={function (_value: React.SetStateAction<sortTypeProps>): void {
          throw new Error('Function not implemented.');
        }}
        setSort={function (_value: React.SetStateAction<sortProps>): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });

  test('Should show button', () => {
    const radio = screen.getAllByRole('radio').length;
    expect(radio).toEqual(2);
  });

  test('Should show button', () => {
    const select = screen.getByRole('combobox', {
      name: /sort by:/i,
    });

    expect(select).toBeDefined();
  });
});
