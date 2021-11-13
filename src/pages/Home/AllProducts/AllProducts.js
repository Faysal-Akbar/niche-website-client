import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-shore-70440.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])
    return (
        <>
            <Header></Header>
            <Container>
            <Typography variant="h6" sx={{ color: '#D10750', mt: 15}}>
                    All Products
                </Typography>
                <Typography variant="h4" sx={{fontWeight: 600, mb: 5}}>
                    Our All Products
                </Typography>
                <Grid container spacing={2} sx={{mb: 10}}>
                {
                allProducts.map(product => <AllProduct
                    key={product._id}
                    product={product}
                ></AllProduct>)
                }
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllProducts;