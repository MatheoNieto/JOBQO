/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
// MATERIAL -UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import * as empleadoActions from '../actions/empleadoActions';

// COMPONENTS

const Tabla = (props) => {
  const { eliminarEmpleado } = props;

  const ponerFilas = () => props.empleados.map((empleado, key) => (
    <>
      <TableRow key={key}>
        <TableCell>{empleado.employee_name}</TableCell>
        <TableCell align='right'>{empleado.employee_salary}</TableCell>
        <TableCell align='right'>{empleado.employee_age}</TableCell>
        <TableCell align='center'>
          <Button
            variant='contained'
            color='primary'
            className='btnUpdate'
            classes={{ root: 'btn-primary' }}
            component={Link}
            to={`/employe/${key}`}
          >
            Actualizar
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => eliminarEmpleado(empleado.id)}

          >
            Eliminar
          </Button>
        </TableCell>
      </TableRow>
    </>
  ));

  return (
    <>

      <TableContainer component={Paper} elevation={2} classes={{ root: 'table-container' }}>
        <Table style={{ minWidth: 750 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Nombres</TableCell>
              <TableCell align='right'>Salario</TableCell>
              <TableCell align='right'>Edad</TableCell>
              <TableCell align='center'>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ponerFilas()}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
const mapStateToProps = (reducers) => {
  return reducers.empleadosReducer;
};

export default connect(mapStateToProps, empleadoActions)(Tabla);
