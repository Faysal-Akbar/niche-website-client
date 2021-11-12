import { Alert, Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import admin from '../../../images/admin/admin.jpg';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email}
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <img width="100%" src={admin} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{mt: 15}}>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                    sx={{width: '60%'}}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    /> <br /> <br />
                    <Button type="submit" variant="outlined">Make Admin</Button>
                </form>
                {success && <Alert sx={{mt: 5}} severity="success">ADMIN CREATED SUCCESSFULLY</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default MakeAdmin;