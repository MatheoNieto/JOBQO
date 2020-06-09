import axios from 'axios';
import {
  TRAER_TODOS,
  CARGANDO,
  ERROR,
  CAMBIONOMBRES,
  CAMBIOSALARIO,
  CAMBIOEDAD,
  GUARDAR } from '../types/empleadosTypes';

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

export const changeNames = (nombre) => (dispatch) => {
  dispatch({
    type: CAMBIONOMBRES,
    payload: nombre,
  });
};

export const changeSalary = (salario) => (dispatch) => {
  dispatch({
    type: CAMBIOSALARIO,
    payload: salario,
  });
};

export const changeEdad = (edad) => (dispatch) => {
  dispatch({
    type: CAMBIOEDAD,
    payload: edad,
  });
};

export const crerEmpleado = (nuevoEmpleado) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });
  try {
    await axios.post('http://dummy.restapiexample.com/api/v1/create', nuevoEmpleado);

    dispatch({
      type: GUARDAR,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }

};

export const editarEmpleado = (datosEmpleado) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });
  try {
    await axios.put(`http://dummy.restapiexample.com/api/v1/update/${datosEmpleado.id}`, datosEmpleado);

    dispatch({
      type: GUARDAR,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }

};

export const eliminarEmpleado = (id) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });
  try {
    await axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);

    dispatch({
      type: TRAER_TODOS,
      payload: [],
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }

};
