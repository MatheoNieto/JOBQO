import { TRAER_TODOS, CARGANDO, ERROR } from '../types/empleadosTypes';

const INITIAL_STATE = {
  empleados: [],
  cargando: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, empleados: action.payload };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    default: return state;
  };
};
