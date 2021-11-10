import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import img from '../../../images/banner/banner.png';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 10, mb: 10, backgroundColor: '#F7F5F6' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5} sx={{display: 'flex', alignItems: 'center', textAlign: 'left'}}>
                    <Box sx={{textDecoration: 'none'}}>
                        <Typography variant="h3" sx={{fontWeight: 600, mb: 3}}>
                            Welcome to Hero <span style={{color:'#D10750'}}>Runner!</span>
                        </Typography>
                        <Typography variant="h6" sx={{fontSize: 14, color:'text.secondary', mb: 3}}>
                            Hero Runner always want to clients happiness. For this reason, Hero Runner always want to sell there best Bicycle. There have a wonderful collection.
                            Please stay with there.
                        </Typography>
                        <NavLink style={{textDecoration: 'none'}} to="/allProducts">
                            <Button style={{backgroundColor:'#D10750'}} variant="contained">Explore Now</Button>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                <img width="60%" src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;