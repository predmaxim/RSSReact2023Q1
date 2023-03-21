import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Search } from './Search';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<Search />);
  });

  test('Should show button', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('Should show input', () => {
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
