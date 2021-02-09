import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MyChess
          </Typography>
          <Button component={Link} to="/auth" variant="contained" color ="primary"> Signin </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
