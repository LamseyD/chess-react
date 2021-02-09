import React, { useState } from 'react'
import { Typography, Grid, TextField, Button } from '@material-ui/core'
import useStyles from './styles'

const Home = () => {

    const classes = useStyles();
    const [usernameInput, setUsernameInput] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(usernameInput);
    }
    return (
        <div className = {classes.container}>
            <Grid>
                <Typography paragraph variant="h1" style = {{color: "#ffffff"}}> Welcome to MyChess </Typography>
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
