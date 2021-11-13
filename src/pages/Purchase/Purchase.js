import { Alert, Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Purchase = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [product, setProduct] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [success, setSuccess] = useState(false);
    const {name, price, description, img} = product;

    useEffect( ()=> {
        fetch(`https://enigmatic-shore-70440.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = {...userInfo};
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    }

    const handleFormSubmit = (e) => {
        const purchase = {
            phone: userInfo.phone,
            address: userInfo.address,
            productName: name,
            price,
            status: 'pending',
            displayName: user.displayName,
            email: user.email,
            description,
            img,
        };
        // send to database
        fetch('https://enigmatic-shore-70440.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(purchase),
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
        <>
        <Header></Header>
        <Container sx={{mt: 10, mb: 20}}>
            <Typography variant="h4" sx={{textAlign: 'left', color: '#D10750', fontWeight: 600}}>
                {name}
                <hr />
            </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <Card>
                    <CardMedia
                        component="img"
                        image={img}
                        alt=""
                    />
                    <CardContent sx={{textAlign: 'left'}}>
                        <Typography variant="body2" color="text.secondary">
                        {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h4" sx={{fontWeight: 600}}>
                    Tell Us
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" />
                    <TextField
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" />
                    <TextField
                    label="Phone"
                    type="number"
                    name="phone"
                    onBlur={handleOnBlur}
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" />
                    <TextField
                    label="Address"
                    type="text"
                    name="address"
                    onBlur={handleOnBlur}
                    sx={{width: "70%", m: 'auto'}}
                    variant="standard" /> <br /> <br />
                    <Button type="submit" style={{backgroundColor:'#D10750', textAlign: 'left'}} variant="contained">Purchase Now</Button>
                </form>
                {success && <Alert sx={{mt: 5}} severity="success">ORDER SUCCESSFUL</Alert>}
            </Grid>
        </Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Purchase;