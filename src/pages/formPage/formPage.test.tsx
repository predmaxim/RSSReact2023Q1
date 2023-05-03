import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FormPage } from './formPage';
import { store } from '../../utils/store';

describe('formPage test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormPage />;
      </Provider>
    );
  });

  test('Should show  h1 text', () => {
    expect(screen.getByText(/Form Page/i)).toBeDefined();
  });
});
