import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import { Button } from '@mui/material';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../Hooks/useAuth';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';

const drawerWidth = 190;

function Dashboard(props) {
  const {logout, admin} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <NavLink style={{textDecoration: 'none', fontWeight: 600}} to="/home"><Button variant="inherit">Home</Button></NavLink>
      <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}`}><Button variant="inherit">Dashboard</Button></NavLink>
      {!admin && <Box>
        <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/payment`}><Button variant="inherit">Payment</Button></NavLink>
        <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/myOrders`}><Button variant="inherit">My Orders</Button></NavLink>
        <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/review`}><Button variant="inherit">Review</Button></NavLink> <br />
        </Box>}

      {admin && <Box>
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/makeAdmin`}><Button variant="inherit">Make Admin</Button></NavLink> <br />
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/addProduct`}><Button variant="inherit">Add Product</Button></NavLink> <br />
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/manageProducts`}><Button variant="inherit">Manage Products</Button></NavLink> <br />
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/manageAllOrders`}><Button variant="inherit">Manage All Orders</Button></NavLink> <br />
        </Box>}

      <Button onClick={logout} style={{backgroundColor: '#D10750'}} variant="contained">Log Out</Button>
       
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
            <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/payment`}>
            <Payment></Payment>  
        </Route>
        <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>  
        </Route>
        <Route path={`${path}/review`}>
            <Review></Review>  
        </Route>
        <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>  
        </Route>
        <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>  
        </Route>
        <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>  
        </Route>
        <Route path={`${path}/manageAllOrders`}>
            <ManageOrders></ManageOrders>  
        </Route>
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
