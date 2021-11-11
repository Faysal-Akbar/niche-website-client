import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../../images/logo/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth();
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
                <Box sx={{mr: 6, display: 'flex'}}>
                    <NavLink style={{textDecoration: 'none', color: 'white', fontWeight: 600, marginRight: '10px', marginTop: '4px'}} to="/home">Home</NavLink>
                    {user.email ? 
                    <Box>
                        <NavLink style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/dashboard">
                            Dashboard
                        </NavLink>
                        <Button onClick={logout} style={{backgroundColor: '#D10750', marginLeft: '10px'}} variant="contained">Log Out</Button> 
                    </Box>
                    :
                        <NavLink style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/login">
                        <Button style={{backgroundColor: '#4EB456', marginLeft: '10px'}} variant="contained">Login</Button>
                        </NavLink>}
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;