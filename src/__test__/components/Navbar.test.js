import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Navbar from '../../components/Navbar';

describe('<Navbar />', () => {
  test('Render del componente Navbar', () => {
    const navbar = mount(<Navbar />);
    expect(navbar.length).toEqual(1);;
  });
});

describe('Navbar Snapshot', () => {
  test('Comprobar la UI del componente Navbar', () => {
    const navbar = create(<Navbar />);
    expect(navbar.toJSON()).toMatchSnapshot();
  });
});
