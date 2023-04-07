import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from './Search';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(
      <Search
        setQuery={function (value: React.SetStateAction<string>): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });

  test('Should show close button', () => {
    expect(
      screen.getByRole('button', {
        name: /x/i,
      })
    ).toBeDefined();
  });

  test('Should show search input', () => {
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
