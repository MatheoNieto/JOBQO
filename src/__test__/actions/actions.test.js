import * as empleadoActions from '../../actions/empleadoActions';
import { TRAER_TODOS } from '../../types/empleadosTypes';
import EmpleadosMock from '../../__mocks__/EmpleadosMock';

describe('Actions', () => {
  test('TRAER_TODOS', () => {
    const payload = EmpleadosMock;
    const expected = {
      type: TRAER_TODOS,
      payload,
    };
    expect(empleadoActions.traerTodos().toEqual(expected));
  });
});

describe('fetch api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('LLamar api y retornar', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123123' }));

    getData('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        expect(response.data).toEqual('123123');
      });

    expect(fetch.mock.calls[0][0]).toEqual('http://dummy.restapiexample.com/api/v1/employees');
  });
});
