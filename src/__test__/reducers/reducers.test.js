import reducers from '../../reducers/empleadosReducer';
import EmpleadosMock from '../../__mocks__/EmpleadosMock';
import InitialState from '../../__mocks__/InitalStateMock';
import { TRAER_TODOS } from '../../types/empleadosTypes';

describe('Reducers', () => {
  test('Retorn initial state ', () => {
    expect(reducers(InitialState, {})).toEqual(InitialState);
  });

  test('LIST EMPLEADOS', () => {
    const payload = EmpleadosMock;
    const action = {
      type: TRAER_TODOS,
      payload,
    };

    const expected = {
      empleados: empleadosMock,
    };
    expect(reducers(InitialState, action)).toEqual(expected);
  });
});
