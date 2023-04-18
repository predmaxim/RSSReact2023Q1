import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Message, MessageProps } from './Message';

const testProps: MessageProps = {
  text: 'test',
};

describe('ProductCard test', () => {
  beforeEach(() => {
    render(<Message {...testProps} />);
  });

  test('Should show title', () => {
    expect(screen.getByText('test')).toBeDefined();
  });
});
