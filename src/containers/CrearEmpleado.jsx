/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// MATERIAL
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import * as empleadoActions from '../actions/empleadoActions';

import '../assets/styles/formstyles.styl';

// COMPONENTES
import Spinner from '../components/Loading';
import Error from '../components/Error';

class CrearEmpleado extends Component {

  componentDidMount() {
    const {
      match: { params: { id } },
      empleados,
      changeNames,
      changeSalary,
      changeEdad } = this.props;

    if (id) {
      const employe = empleados[id];
      changeNames(employe.employee_name);
      changeSalary(employe.employee_salary);
      changeEdad(employe.employee_age);
    }
  }

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
    const {
      match: { params: { id } },
      empleados,
      employee_name,
      employee_salary,
      employee_age,
      crerEmpleado,
      editarEmpleado,
      limpiarForm } = this.props;

    const newEmployee = {
      name: employee_name,
      salary: employee_salary,
      age: employee_age,
    };

    // EDITAR DATOS EMPLEADO
    if (id) {
      const employe = empleados[id];
      const newDataEmpleado = {
        ...newEmployee,
        id: employe.id };
      editarEmpleado(newDataEmpleado);
    } else {
      limpiarForm();
    }

    crerEmpleado(newEmployee);
  }

  desabilitar = () => {
    const { employee_name, employee_salary, employee_age, cargando } = this.props;

    if (cargando) {
      return true;
    }
    if (!employee_name || !employee_salary || !employee_age) {
      return true;
    }
    return false;
  }

  mostrarAccion= () => {
    const { error, cargando } = this.props;
    if (cargando) {
      return <Spinner />;
    }

    if (error) {
      return <Error mensaje={error} />;
    }
  }

  render() {
    return (
      <>
        {
          (this.props.regresar) ? <Redirect to='/' /> : ''
        }
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
              disabled={this.desabilitar()}
            >
              ¡Crea empleado!
            </Button>
            {this.mostrarAccion()}
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
