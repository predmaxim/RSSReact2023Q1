import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormCard, FormCardProps } from './FormCard';

const testProps: FormCardProps = {
  id: '1',
  avatar: 'https://i.dummyjson.com/data/products/1/1.jpg',
  firstName: 'Max',
  lastName: 'Pred',
  birthday: '1985-06-05',
  city: 'St.Petersburg',
  gender: 'Male',
  agreement: true,
};

describe('FormCard test', () => {
  beforeEach(() => {
    render(<FormCard {...testProps} />);
  });

  test('Should be show firstname', () => {
    expect(screen.getByText(/Max/)).toBeDefined();
  });

  test('firstName must be 3 letters length min', () => {
    const firstName = screen.getByText(/Max/);
    expect(firstName.textContent?.length).toBeGreaterThanOrEqual(3);
  });

  test('Should be show lastname', () => {
    expect(screen.getByText(/Pred/)).toBeDefined();
  });

  test('Should be show birthday', () => {
    expect(screen.getByText(/1985-06-05/i)).toBeDefined();
  });

  test('Should be show city', () => {
    expect(screen.getByText(/St.Petersburg/i)).toBeDefined();
  });

  test('Should be show gender', () => {
    expect(screen.getByText(/Male/i)).toBeDefined();
  });
});
