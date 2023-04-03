import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './home';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('Should show h1 text', () => {
    expect(screen.getByText(/Home page/i)).toBeDefined();
  });
});
