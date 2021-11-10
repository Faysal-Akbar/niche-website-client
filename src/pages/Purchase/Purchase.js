import { Container, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Purchase = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <>
        <Header></Header>
        <Container sx={{mt: 10}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            
            </Grid>
        </Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Purchase;