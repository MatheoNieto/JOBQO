import {
  TRAER_TODOS,
  CARGANDO,
  ERROR,
  CAMBIONOMBRES,
  CAMBIOEDAD,
  CAMBIOSALARIO,
  GUARDAR,
  LIMPIAR } from '../types/empleadosTypes';

const INITIAL_STATE = {
  empleados: [],
  cargando: false,
  error: '',
  employee_name: '',
  employee_salary: '',
  employee_age: '',
  regresar: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        empleados: action.payload,
        cargando: false,
        error: false,
        regresar: false,
      };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    case CAMBIONOMBRES:
      return { ...state, employee_name: action.payload };

    case CAMBIOEDAD:
      return { ...state, employee_age: action.payload };

    case CAMBIOSALARIO:
      return { ...state, employee_salary: action.payload };

    case GUARDAR:
      return { ...state,
        empleados: [],
        cargando: false,
        error: '',
        employee_name: '',
        employee_salary: '',
        employee_age: '',
        regresar: true,
      };
    case LIMPIAR:
      return { ...state,
        employee_name: '',
        employee_salary: '',
        employee_age: '',
      };
    default: return state;
  };
};
