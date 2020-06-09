import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Layout from '../components/Navbar';
import NotFound from '../components/NotFound';

// PAGES
import Empleados from '../containers/Empleado';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Empleados} />
        <Route exact path='/employes' component={Empleados} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
