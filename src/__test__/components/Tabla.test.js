import React from 'react';
import { mount } from 'enzyme';
import Tabla from '../../components/Tabla';
import ProviderMock from '../../__mocks__/ProviderMock';
import EmpleadosMock from '../../__mocks__/EmpleadosMock';

describe('<Tabla />', () => {

  test('Render Provider', () => {
    const tabla = shallow(
      <ProviderMock>
        <Tabla />
      </ProviderMock>,
    );
    expect(tabla.length).toEqual(1);
  });

  test('Render del componente Tabla', () => {
    const tabla = mount(<Tabla />);
    expect(tabla.length).toEqual(1);;
  });

  test('Render of the data (Rows)', () => {
    const empleados = shallow(
      <EmpleadosMock>
        <Tabla />
      </EmpleadosMock>,
    );

    expect(empleados.length).toEqual(1);
  });

  test('Comprobar boton de actualizar', () => {
    const wrapper = mount(
      <EmpleadosMock>
        <Tabla />
      </EmpleadosMock>,
    );
    wrapper.find('.btnUpdate').simulate('click');
  });

  test('Comprobar boton de eliminar', () => {

  });
});
