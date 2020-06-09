import React from 'react';
import { mount } from 'enzyme';
import Navbar from '../../components/Navbar';

describe('<Navbar />', () => {
  test('Render del componente Navbar', () => {
    const navbar = mount(<Navbar />);
    expect(navbar.length).toEqual(1);;
  });
});
