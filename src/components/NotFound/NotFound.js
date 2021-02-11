import React from 'react';
import { Typography, ThemeProvider, Button, Grid } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import useStyles from './styles';
import catGif from '../../assets/cat.gif';

import { Link } from 'react-router-dom';
const NotFound = () => {
    const classes = useStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div className = {classes.container}>
            <Grid container zeroMinWidth xs = {12} direction = "column" justify = "center" alignItems = "center">
                <ThemeProvider theme = {theme}> 
                    <Typography className = {classes.textStyle} paragraph variant="h3"> 404 - We can't find the Player you searched for... </Typography>
                    <img className = {classes.catGif} src={catGif} alt="cat gif" width = "200px" height = "200px"/>
                    <Typography className = {classes.textStyle} paragraph variant="body2" > Here's a cat gif instead...</Typography>
                    <Button component = {Link} to="/" variant="contained" color="primary" size="large" half> Go back to search? </Button>
                </ThemeProvider>      
            </Grid>  
        </div>
    )
}

export default NotFound
