import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import Icon from './icon'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import useStyles from './styles'

import { signIn, signUp } from '../../actions/auth'

const initialState = {
    email: '',
    chessUsername: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setSigninMode] = useState(false)
    const [formData, setFormData] = useState(initialState);
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(isSignUp) {
            dispatch(signUp(formData, history)) //dispatch an action (redux)
        } else {
            dispatch(signIn(formData, history))
        }
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    } //hooks to interact with previous state

    const switchMode = () => {
        setSigninMode((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    } //more react hooks

    const googleSuccess = async (res) => {
        const result = res?.profileObj //?. means optional field. profileObj might not exist -> return undefined
        const token = res?.tokenId

        try {
            dispatch({type: 'AUTH', payload: {result, token}})
            history.push('/')
        } catch(error) {
            console.log(error)
        }
    }

    const googleFailure = async () => {
        console.log("Google Sign In Failed")
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className = {classes.paper} elevation = {3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant = "h5"> {isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className = {classes.form} onSubmit = {handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignUp && <Input name="ChessComUserName" label="Chess.com Username" handleChange={handleChange} autoFocus fullWidth/>}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword} />
                            { isSignUp && <Input name="confirmPassword" label = "Repeat Password" handleChange={handleChange} type = "password" />}
                            <Button type = "submit" fullWidth variant="contained" color="primary" className = {classes.submit}>
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </Button>
                            
                            <GoogleLogin 
                                clientId = {process.env.REACT_APP_CLIENT_ID}
                                render={(renderProps) => (
                                    <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained"> Google Signin</Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />

                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
        
    )


}

export default Auth
