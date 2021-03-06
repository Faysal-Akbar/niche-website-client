import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, price, description, img} = product;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="220"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent sx={{textAlign: 'left'}}>
                    <Typography variant="h6" sx={{fontWeight: 600, color: '#D10750', mb: 2}}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                    <Typography variant="h5" sx={{color: '#D10750', my: 2}}>
                    Price : ${price}
                    </Typography>
                    <NavLink to={`/purchase/${_id}`} style={{textDecoration: 'none'}}>
                        <Button style={{backgroundColor:'#D10750'}} variant="contained">Buy Now</Button>
                    </NavLink>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;