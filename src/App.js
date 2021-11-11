import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllProducts from './pages/Home/AllProducts/AllProducts';
import Home from './pages/Home/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
