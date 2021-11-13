import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/banner/banner2.png';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleFormSubmit = e => {
        const addProduct = {
            ...product
        }
        // send to database
        fetch('https://enigmatic-shore-70440.herokuapp.com/products', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(addProduct),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{my: 5}}>
                    <Typography variant="h4" sx={{fontWeight: 600}}>
                        Add A Product
                    </Typography>
                    <form onSubmit={handleFormSubmit}>
                    <TextField
                    label="Product Name"
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}    
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" />
                    <TextField
                    label="Product Price"
                    type="number"
                    name="price"
                    onBlur={handleOnBlur}
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" />
                    <TextField
                    label="Image URL"
                    type="text"
                    name="img"
                    onBlur={handleOnBlur}
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" />
                    <TextField
                    label="Description"
                    type="text"
                    name="description"
                    onBlur={handleOnBlur}
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" /> <br /> <br />
                    <Button type="submit" style={{backgroundColor:'#D10750', textAlign: 'left'}} variant="contained">ADD PRODUCT</Button>
                </form>
                {success && <Alert sx={{mt: 5}} severity="success">PRODUCT ADDED SUCCESSFULLY</Alert>}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img width="100%" src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProduct;