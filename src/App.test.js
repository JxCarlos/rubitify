import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { store } from "../src/helpers";
import { Provider } from "react-redux";

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
});
