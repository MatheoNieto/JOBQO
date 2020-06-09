import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/empleadosTypes';

// eslint-disable-next-line import/prefer-default-export
export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }

};
