/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import * as empleadoActions from '../actions/empleadoActions';

import '../assets/styles/formstyles.styl';

class CrearEmpleado extends Component {

  handleChangeNames = (event) => {
    this.props.changeNames(event.target.value);
  }

  handleChangeSalary = (event) => {
    this.props.changeSalary(event.target.value);
  }

  handleChangeAge = (event) => {
    this.props.changeEdad(event.target.value);
  }

  guardar = (event) => {
    event.preventDefault();
    const { employee_name, employee_salary, employee_age, crerEmpleado } = this.props;
    const newEmployee = {
      name: employee_name,
      salary: employee_salary,
      age: employee_age,
    };

    crerEmpleado(newEmployee);
  }

  render() {
    return (
      <>
        <div className='container'>
          <h1>Registrar empleado</h1>
          <form onSubmit={this.guardar}>
            <TextField
              type='text'
              label='Nombres'
              fullWidth
              margin='normal'
              variant='outlined'
              value={this.props.employee_name}
              onChange={this.handleChangeNames}
              required
            />
            <TextField
              type='number'
              label='Salario'
              fullWidth
              margin='normal'
              variant='outlined'
              value={this.props.employee_salary}
              onChange={this.handleChangeSalary}
              required
            />
            <TextField
              type='number'
              label='Edad'
              fullWidth
              margin='normal'
              variant='outlined'
              value={this.props.employee_age}
              onChange={this.handleChangeAge}
              required
            />

            <Button
              type='submit'
              variant='contained'
              fullWidth
              color='primary'
            >
              ¡Crea empleado!
            </Button>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reducers) => {
  return reducers.empleadosReducer;
};

export default connect(mapStateToProps, empleadoActions)(CrearEmpleado);
