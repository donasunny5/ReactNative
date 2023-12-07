// App.test.js

import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders Todo List text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Todo List/i);
  expect(textElement).toBeTruthy();
});
