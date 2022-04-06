import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Restaurantsingle from './routes/RestaurantSingle';
import Restaurantupdate from './routes/RestaurantUpdate';
import { RestaurantcontextProvider } from './context/RestaurantContext';

const App = () => {
  return (
    <RestaurantcontextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurant/:id' component={Restaurantsingle} />
          <Route
            exact
            path='/restaurant/:id/update/'
            component={Restaurantupdate}
          />
        </Switch>
      </Router>
    </RestaurantcontextProvider>
  );
};

export default App;
