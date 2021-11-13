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
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';

const drawerWidth = 225;

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

      <Box sx={{textAlign: 'left', ml: 3}}>
      <NavLink style={{textDecoration: 'none', fontWeight: 600}} to="/home"><i className="fas fa-home"></i><Button variant="inherit">Home</Button></NavLink> <br />
      <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}`}><i className="fas fa-columns"></i><Button variant="inherit">Dashboard</Button></NavLink>
      </Box>
      <Divider/>
      {!admin && <Box sx={{textAlign: 'left', ml: 3}}>
        <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/payment`}><i className="fab fa-cc-mastercard"></i><Button variant="inherit">Payment</Button></NavLink> <br />
        <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/myOrders`}><i className="fab fa-first-order-alt"></i><Button variant="inherit">My Orders</Button></NavLink> <br />
        <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/review`}><i className="fas fa-comments"></i><Button variant="inherit">Review</Button></NavLink> <br />
        </Box>}

      {admin && <Box sx={{textAlign: 'left', ml: 3}}>
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/makeAdmin`}><i className="fas fa-user-shield"></i><Button variant="inherit">Make Admin</Button></NavLink> <br />
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/addProduct`}><i className="far fa-plus-square"></i><Button variant="inherit">Add Product</Button></NavLink> <br />
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/manageProducts`}><i className="fas fa-tasks"></i><Button variant="inherit">Manage Products</Button></NavLink> <br />
            <NavLink style={{textDecoration: 'none', fontWeight: 600}} to={`${url}/manageAllOrders`}><i className="fab fa-product-hunt"></i><Button variant="inherit">Manage All Orders</Button></NavLink> <br />
        </Box>}
        <Divider/>

      <Button onClick={logout} style={{backgroundColor: '#D10750', marginTop: '10px'}} variant="contained"><i className="fas fa-sign-out-alt mr-3"></i> Log Out</Button>
       
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#2C302C",
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
          <i className="fas fa-columns"></i>
           <span> Dashboard </span>
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
        <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>  
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>  
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>  
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageOrders></ManageOrders>  
        </AdminRoute>
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
