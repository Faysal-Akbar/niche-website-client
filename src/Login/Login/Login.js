import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login/login.jpg';

const Login = () => {
    const {user, loginUser, isLoading, error} = useAuth();
    const [loginData, setLoginData] = useState({});
    
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return ( 
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{mt: 20}}>
                    <Typography variant="h4">Please Login</Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                        label="Email"
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        sx={{width: "70%", m: 'auto'}}
                        variant="standard" />
                        <TextField
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        sx={{width: "70%", m: 'auto'}}
                        variant="standard" />
                        <br /> <br />
                        <Button type="submit" style={{backgroundColor:'#D10750', textAlign: 'left', marginBottom: '15px'}} variant="contained">Login</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    <NavLink style={{textDecoration: 'none', fontWeight: 600}} to="/register">
                        New User? Please Register
                    </NavLink>
                    {user.email && <Alert sx={{mt: 5}} severity="success">LOGIN SUCCESSFUL</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img width="100%" height="600px" src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;