import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<Form />);
  });

  test('Should show button', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('Should show input', () => {
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
