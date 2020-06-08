import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              variant='h4'
              className={classes.title}
              align='center'
            >
              JOBQO
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />

        {children}
      </div>
    </>
  );
};

export default Navbar;
