import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './routes/Home';
import Restaurantsingle from './routes/RestaurantSingle';
import Restaurantupdate from './routes/RestaurantUpdate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurant/1" component={Restaurantsingle} />
        <Route exact path="/update/1" component={Restaurantupdate} />
      </Switch>
    </Router>
  );
}

export default App;


