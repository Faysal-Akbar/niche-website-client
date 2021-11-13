import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-shore-70440.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <Container sx={{ flexGrow: 1, mb: 10}}>
            <Typography variant="h6" sx={{ color: '#D10750' }}>
                Products
            </Typography>
            <Typography variant="h4" sx={{fontWeight: 600, mb: 5}}>
                Our Awesome Products
            </Typography>
            <Grid container spacing={2}>
            {
            products.map(product => <Product
                key={product._id}
                product={product}
            ></Product>)
            }
            </Grid>
        </Container>
    );
};

export default Products;