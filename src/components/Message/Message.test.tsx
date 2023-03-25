import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Message, MessageProps } from './Message';

const testProps: MessageProps = {
  id: 1,
  avatar: 'https://i.dummyjson.com/data/products/1/1.jpg',
  name: 'Max',
  surname: 'Pred',
  birthday: '1985-06-05',
  city: 'St.Petersburg',
  sex: 'Male',
};

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<Message {...testProps} />);
  });

  test('Should show title', () => {
    expect(screen.getByText(testProps.name)).toBeDefined();
  });

  test('Should show description', () => {
    expect(screen.getByText(testProps.surname)).toBeDefined();
  });

  test('Should show price', () => {
    expect(screen.getByText(testProps.birthday)).toBeDefined();
  });

  test('Should show price', () => {
    expect(screen.getByText(testProps.city)).toBeDefined();
  });

  test('Should show price', () => {
    expect(screen.getByText(testProps.sex)).toBeDefined();
  });
});
