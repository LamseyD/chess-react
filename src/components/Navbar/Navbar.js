import React, { useState, useEffect } from 'react';

import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import useStyles from './styles';

import decode from 'jwt-decode'
import cookies from 'react-cookies'

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function ButtonAppBar() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const [user, setUser] = useState(cookies.load('profile'));
	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		history.push('/');
		setUser(null);
	}

	const preventDefault = (event) => {
		event.preventDefault();
		history.push("/");
	};

	//run this when location changes
	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime())
				logout();
		}
		setUser(cookies.load('profile'));
	}, [location]);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.title}>
						<Typography variant="h6" >
							<Link onClick={preventDefault} style={{ color: "white" }}>
								MyChess
              				</Link>
						</Typography>
					</div>
					{user ? (
						<div className={classes.profile}>
							<Avatar className={classes.purple} alt={user.result.email || "D"} src={user.result.imageUrl}>
								{user.result.email.charAt(0) || "D"}
							</Avatar>
							<Typography className={classes.userName} variant="h6">
								{user?.result.email || user.result.email} 
							</Typography>
							<Button variant="contained" className={classes.logout} color="secondary" onClick={logout}> Logout </Button>
						</div>
					) : (
						<div>
							<Button component={Link} to="/auth" variant="contained" color="primary"> Signin </Button>
						</div>
					)}        
				</Toolbar>
			</AppBar>
		</div>
	);
}
