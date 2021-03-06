import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


export const App = () => {
    return (
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cocktail/:id">
          <SingleCocktail />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
          </Switch>
        </Router>
    )
}

export default App;


