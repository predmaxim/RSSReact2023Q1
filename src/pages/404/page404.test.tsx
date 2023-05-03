import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Page404 } from './page404';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<Page404 />);
  });

  test('Should show  h1 text', () => {
    expect(screen.getByText(/404 Page not found/i)).toBeDefined();
  });
});
