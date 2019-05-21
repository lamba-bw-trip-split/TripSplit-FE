import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import TripsList from './components/TripsList/TripsList';
import TripCard from './components/Trip/TripCard/TripCard';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import './App.scss';

function App() {
  return (
    <div className="App App-header">
      <div className="nav-bar">
        <NavLink activeClassName="active" to="/">
          Home{' '}
        </NavLink>
        <NavLink activeClassName="active" to="/trips">
          {' '}
          Trips
        </NavLink>
        <NavLink activeClassName="active" to="/login">
          {' '}
          Login
        </NavLink>
        <NavLink activeClassName="active" to="/signup">
          {' '}
          SignUp
        </NavLink>
      </div>
      <header className="App-header">
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/trips" component={TripsList} />
        <PrivateRoute exact path="/tirps/:id" component={TripCard} />
      </header>
    </div>
  );
}

export default App;
