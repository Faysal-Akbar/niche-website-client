import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../../images/logo/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center', ml: 7}}>
                <img width="50px" src={logo} alt="" />
                <Typography variant="h5" component="div" sx={{ fontWeight: 600, mx: 3 }}>
                    Hero <span style={{color: '#D10750'}}>Runner</span>
                </Typography>
                </Box>
                <Box sx={{mr: 6}}>
                    <NavLink style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/home">Home</NavLink>
                    <Button color="inherit">Login</Button>
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;