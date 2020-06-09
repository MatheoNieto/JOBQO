import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Empleado from '../../containers/Empleado';

describe('<Empleado />', () => {
  test('Render del componente Empleado', () => {
    const empleados = shallow(
      <ProviderMock>
        <Empleado />
      </ProviderMock>,
    );
    expect(empleados.length).toEqual(1);
  });

  test('Render de los empleados', () => {
    const empleados = mount(
      <ProviderMock>
        <Empleado />
      </ProviderMock>,
    );
    expect(empleados.length).toEqual(1);
  });
});
