import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import register from '../../images/login/login.jpg';

const Register = () => {
    const {user, registerUser, isLoading, error} = useAuth();
    const [registerData, setRegisterData] = useState({});

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = e => {
        if(registerData.password !== registerData.password2){
            alert('Your Password did not match');
            return;
        }
        registerUser(registerData.name, registerData.email, registerData.password, history);
        e.preventDefault();
    }
    return ( 
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{mt: 20}}>
                    <Typography variant="h4">Please Register</Typography>
                    { !isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                        label="Name"
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        sx={{width: "70%", m: 'auto'}}
                        variant="standard" />
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
                        <TextField
                        label="ReType Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        sx={{width: "70%", m: 'auto'}}
                        variant="standard" />
                        <br /> <br />
                        <Button type="submit" style={{backgroundColor:'#D10750', textAlign: 'left', marginBottom: '15px'}} variant="contained">Register</Button>
                    </form>}
                    { isLoading && <CircularProgress /> }
                    <NavLink style={{textDecoration: 'none', fontWeight: 600}} to="/login">
                        Already Registered? Please Login
                    </NavLink>
                    {user.email && <Alert sx={{mt: 5}} severity="success">REGISTRATION SUCCESSFUL</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img width="100%" height="600px" src={register} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};


export default Register;