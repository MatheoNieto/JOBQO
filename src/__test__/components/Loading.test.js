import React from 'react';
import { mount } from 'enzyme';
import Loading from '../../components/Loading';

describe('<Loading />', () => {
  test('Render del componente Loading', () => {
    const loading = mount(<Loading />);
    expect(loading.length).toEqual(1);;
  });
});
