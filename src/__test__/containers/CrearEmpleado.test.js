import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CrearEmpleado from '../../containers/CrearEmpleado';

describe('<CrearEmpleado />', () => {
  test('Render del componente CrearEmpleado', () => {
    const empleados = shallow(
      <ProviderMock>
        <CrearEmpleado />
      </ProviderMock>,
    );
    expect(empleados.length).toEqual(1);
  });

  test('Render del form', () => {
    const empleados = mount(
      <ProviderMock>
        <CrearEmpleado />
      </ProviderMock>,
    );
    expect(empleados.length).toEqual(1);
  });
});
