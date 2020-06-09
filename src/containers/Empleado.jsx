import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as empleadoActions from '../actions/empleadoActions';

class Empleado extends Component {

  async componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.traerTodos();
  }

  // eslint-disable-next-line react/destructuring-assignment
  ponerFilas = () => this.props.empleados.map((empleado) => (
    <>
      <tr key={empleado.id}>
        <td>
          { empleado.name }
        </td>
        <td>
          { empleado.email }
        </td>
        <td>
          { empleado.website }
        </td>
      </tr>
    </>
  ));

  render() {
    return (
      <div>
        <table className='tabla'>
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    );
  }
};

const mapStateToProps = (reducers) => {
  return reducers.empleadosReducer;
};

export default connect(mapStateToProps, empleadoActions)(Empleado);
