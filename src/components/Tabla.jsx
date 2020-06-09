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
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

import { connect } from 'react-redux';

const Tabla = (props) => {
  const ponerFilas = () => props.empleados.map((empleado) => (
    <>
      <TableRow key={empleado.id}>
        <TableCell>{empleado.employee_name}</TableCell>
        <TableCell align='right'>{empleado.employee_salary}</TableCell>
        <TableCell align='right'>{empleado.employee_age}</TableCell>
        <TableCell align='center'>
          <Button
            variant='contained'
            color='primary'
            classes={{ root: 'btn-primary' }}
            component={Link}
            to={`/employe/${empleado.id}`}
          >
            Actualizar
          </Button>
          <Button variant='contained' color='secondary'>
            Eliminar
          </Button>
        </TableCell>
      </TableRow>
    </>
  ));

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Listado de empleados</h2>
      <Paper classes={{ root: 'button-container' }} elevation={0}>
        <Button
          variant='outlined'
          color='primary'
          classes={{ root: 'btn-primary' }}
          component={Link}
          to='/employes'
          endIcon={<CreateRoundedIcon />}
        >
          Crear empleado
        </Button>
      </Paper>
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

export default connect(mapStateToProps)(Tabla);
