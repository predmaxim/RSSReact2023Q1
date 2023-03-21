import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormPage } from './formPage';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<FormPage />);
  });

  test('Should show  h1 text', () => {
    expect(screen.getByText(/Form Page/i)).toBeDefined();
  });
});
