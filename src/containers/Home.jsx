import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {

    background: 'linear-gradient(90deg, #36d1dc 0%,#5b86e5 100% );',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    textDecoration: 'none',
    margin: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Button
          className={clsx(classes.btn)}
          component={Link}
          to='/register'
        >
          Crear empleado
        </Button>
        <Button
          className={clsx(classes.btn)}
          component={Link}
          to='/consult'
        >
          Consultar empleados
        </Button>
        <Button
          className={clsx(classes.btn)}
          component={Link}
          to='/update'
        >
          Actualizar empleado
        </Button>

        <Button
          className={clsx(classes.btn)}
          component={Link}
          to='/delete'
        >
          Elimiar empleado
        </Button>

      </Grid>

    </>
  );
};

export default Home;
