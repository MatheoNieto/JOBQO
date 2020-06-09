import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../../components/NotFound';

describe('<NotFound />', () => {
  test('Render del componente NotFound', () => {
    const notFound = mount(<NotFound />);
    expect(notFound.length).toEqual(1);;
  });
});
