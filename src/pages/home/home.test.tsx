import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './home';
import { store } from '../../utils/store';
import { Provider } from 'react-redux';

describe('Home page test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />;
      </Provider>
    );
  });

  test('Should show  h1 text', () => {
    expect(screen.getByText(/Home page/i)).toBeDefined();
  });
});
