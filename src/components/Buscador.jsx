import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as empleadoActions from '../actions/empleadoActions';

const Buscador = (props) => {
  const handleChangeSearch = (event) => {
    props.buscarEmpleado(event.target.value);

  };

  return (
    <>
      <form>
        <TextField
          label='Buscar empleado'
          variant='outlined'
          fullWidth
          onChange={handleChangeSearch}
          value={props.textsearch}
        />
      </form>
    </>
  );
};
const mapStateToProps = (reducers) => {
  return reducers.empleadosReducer;
};

export default connect(mapStateToProps, empleadoActions)(Buscador);
