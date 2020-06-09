/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as empleadoActions from '../actions/empleadoActions';
// styles
import '../assets/styles/employes.styl';

// COMPONENTS
import Spinner from '../components/Loading';
import Error from '../components/Error';
import Tabla from '../components/Tabla';

class Empleado extends Component {

  componentDidMount() {
    if (!this.props.empleados.length) {
      this.props.traerTodos();
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
        { this.ponerContenido() }
      </>
    );
  }
};

const mapStateToProps = (reducers) => {
  return reducers.empleadosReducer;
};

export default connect(mapStateToProps, empleadoActions)(Empleado);
