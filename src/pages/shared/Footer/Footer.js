import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, TextField, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'lightGray'}}>
            <Grid container spacing={2}>
                <Container sx={{display: 'flex', justifyContent: 'space-between', mt: 5}}>
                <Grid item xs={12} sm={6} md={5} sx={{textAlign: 'left'}}>                   
                    <Typography variant="h4" sx={{fontWeight: 600, mb: 3}}>
                        Hero <span style={{color:'#D10750'}}>Runner</span>
                    </Typography>
                    <Box sx={{borderRight: '1px solid gray'}}>
                    <Typography variant="h6" sx={{fontSize: 14, color:'text.secondary', mb: 2, mr: 5}}>
                            Hero Runner looking forward to stablish there company to help the client. They can do the hard work for the clients happiness. Bicycle is one of the most favorite things for some lovely people. We like to happy there.
                    </Typography>
                    <Typography style={{color:'#D10750'}}>
                    <i style={{marginRight: '15px'}} className="fab fa-facebook fa-2x"></i>
                    <i style={{marginRight: '15px'}} className="fab fa-instagram fa-2x"></i>
                    <i style={{marginRight: '15px'}} className="fab fa-twitter fa-2x"></i>
                    <i className="fab fa-linkedin fa-2x"></i>
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={2} sx={{textAlign: 'left'}}>
                    <Typography variant="h6" sx={{fontWeight: 600, textAlign: 'center'}}>
                    PAGES
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', ml: 2, mt: 3, color: 'text.secondary'}}>
                        <Typography variant="button">
                        Home
                        </Typography>
                        <Typography variant="button">
                        About Us
                        </Typography>
                        <Typography variant="button">
                        Blog
                        </Typography>
                        <Typography variant="button">
                        FAQs
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={2} sx={{textAlign: 'left'}}>
                    <Typography variant="h6" sx={{fontWeight: 600, textAlign: 'center'}}>
                        MY ACCOUNT
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', ml: 2, mt: 3, color: 'text.secondary'}}>
                        <Typography variant="button">
                        My Account
                        </Typography>
                        <Typography variant="button">
                        Wish List
                        </Typography>
                        <Typography variant="button">
                        Shopping Cart
                        </Typography>
                        <Typography variant="button">
                        Checkout
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'left'}}>
                <Typography variant="h5" sx={{fontWeight: 600, mb: 3, textAlign: 'center'}}>
                    NEWSLETTER
                </Typography>
                <Typography>
                    Subscribe to the Hero Runner mailing list to receive updates on new arrivals, offers, and other discount information
                </Typography>
                <TextField sx={{mt: 2, width: '100%'}} id="outlined-basic" label="Write your email here" variant="outlined" />
                </Grid>
                </Container>
            </Grid>
        </Box>
    );
};

export default Footer;