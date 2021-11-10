import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const AllProduct = ({product}) => {
    const {name, price, description, img} = product;
    return (
        <Grid item xs={4} sm={6} md={4}>
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
                    <Button style={{backgroundColor:'#D10750', alignItems: 'start'}} variant="contained">Buy Now</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default AllProduct;