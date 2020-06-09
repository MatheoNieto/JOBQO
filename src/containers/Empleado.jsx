/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import * as empleadoActions from '../actions/empleadoActions';
// styles
import '../assets/styles/employes.styl';

// COMPONENTS
import Spinner from '../components/Loading';
import Error from '../components/Error';
import Tabla from '../components/Tabla';

import Search from '../components/Buscador';

class Empleado extends Component {

  componentDidMount() {
    if (!this.props.empleados.length && !this.props.textsearch) {
      this.props.traerTodos();
    }
  }

  componentDidUpdate() {
    const { empleados, cargando, traerTodos, textsearch } = this.props;

    if (!empleados.length && !cargando && !textsearch) {
      traerTodos();
    }
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Error mensaje={this.props.error} />;
    }
    return <Tabla />;

  };

  // eslint-disable-next-line react/destructuring-assignment
  render() {
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

        <Paper classes={{ root: 'button-container' }} elevation={0}>
          <Search />
        </Paper>
        { this.ponerContenido() }
      </>
    );
  }
};

const mapStateToProps = (reducers) => {
  return reducers.empleadosReducer;
};

export default connect(mapStateToProps, empleadoActions)(Empleado);
