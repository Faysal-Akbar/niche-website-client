import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Container sx={{mb: 15}}>
            <Typography style={{color: '#D10750'}} variant="h6">
                Why you choose us
            </Typography>
            <Typography variant="h4" sx={{fontWeight: 600}}>
                Why you choose Hero <span style={{color: '#D10750'}}>Runner</span>
            </Typography>
            <Grid container spacing={2} sx={{mt: 5}}>
                <Grid item xs={12} sm={12} md={4}>
                <Paper sx={{p: 5, color: 'white', backgroundColor: 'text.disabled'}}>
                    <i className="fas fa-hands-helping fa-4x"></i>
                    <Typography variant="h5" sx={{fontWeight: 600, mt: 2}}>
                        100% Trusted Company
                    </Typography>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                <Paper sx={{p: 5, color: 'white', backgroundColor: 'text.disabled'}}>
                    <i className="fas fa-users fa-4x"></i>
                    <Typography variant="h5" sx={{fontWeight: 600, mt: 2}}>
                        50+ Man Power
                    </Typography>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                <Paper sx={{p: 5, color: 'white', backgroundColor: 'text.disabled'}}>
                <i className="far fa-gem fa-4x"></i>
                    <Typography variant="h5" sx={{fontWeight: 600, mt: 2}}>
                        6 Years Work Experience
                    </Typography>
                </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;