import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './about';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('Should show  h1 text', () => {
    expect(screen.getByText(/About Us Page/i)).toBeDefined();
  });
});
