import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

test('renders without error', () => {
  const wrapper = shallow(<App />);
});
