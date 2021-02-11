import React, {useState, useEffect} from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

import decode from 'jwt-decode'

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const logout = () => {
      dispatch({type:'LOGOUT'});
      history.push('/');
      setUser(null);
  }
  console.log(user);

  const preventDefault = (event) => event.preventDefault();

  //run this when location changes
  useEffect(() => {
      const token = user?.token;
      if (token) {
          const decodedToken = decode(token);
          if(decodedToken.exp * 1000 < new Date().getTime())
              logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="h6" >
              <Link href="/" onClick={preventDefault} style = {{color: "white"}}>
                MyChess
              </Link>
            </Typography>
          </div>
          <Button component={Link} to="/auth" variant="contained" color ="primary"> Signin </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
