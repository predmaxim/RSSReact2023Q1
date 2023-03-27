import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

const updateFormPageState = (form: JSX.Element): void => {
  console.log(form.props);
};

describe('Form test', () => {
  beforeEach(() => {
    render(<Form updateFormPageState={updateFormPageState} />);
  });

  test('Should show button', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('Should show input', () => {
    expect(screen.getByPlaceholderText(/first name/i)).toBeDefined();
  });

  test('Should show input', () => {
    expect(screen.getByPlaceholderText(/last name/i)).toBeDefined();
  });

  test('Should show input', () => {
    expect(screen.getByText(/birthday/i)).toBeDefined();
  });
});
