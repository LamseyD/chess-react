import React, { useState } from 'react'
import { Typography, Grid, TextField, Button, ThemeProvider} from '@material-ui/core'
import useStyles from './styles'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const Home = () => {

    const classes = useStyles();
    const [usernameInput, setUsernameInput] = useState("");

    //Making sure the theme is responsive.
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(usernameInput);
    }


    return (
        <div className = {classes.container}>
            <Grid container zeroMinWidth xs = {12} direction = "column" justify = "center" alignItems = "center">
                    <ThemeProvider theme = {theme}> 
                        <Typography paragraph variant="h1" style = {{color: "#ffffff"}}> Welcome to MyChess </Typography>

                    </ThemeProvider>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        {/* inputProps changes the text color, input label changes the label color */}
                        <TextField 
                            className = {classes.textStyle} 
                            id="standard-basic" 
                            label="Enter your chess.com username here..." 
                            placeholder="lamseyd"  
                            inputProps={{className: classes.multilineColor}}   
                            InputLabelProps={{style: { color: '#fff' }}} 
                            onChange={event => setUsernameInput(event.target.value)} 
                            value={usernameInput} 
                            fullWidth
                        />
                        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
                            Submit
                        </Button>
                    </form>
            </Grid>
        </div>
    )
}

export default Home
