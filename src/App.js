import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/Home/AllProducts/AllProducts';
import Home from './pages/Home/Home/Home';
import Purchase from './pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
