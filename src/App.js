import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import TripsList from './components/TripsList/TripsList';
import TripCard from './components/Trip/TripCard/TripCard';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/trips"> Trips</NavLink>
        <NavLink to="/login"> Login</NavLink>
        <NavLink to="/signup"> SignUp</NavLink>
      </div>
      <header className="App-header">
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/trips" component={TripsList} />
        <PrivateRoute path="/tirps/:id" component={TripCard} />
      </header>
    </div>
  );
}

export default App;
{
  /* <Route
  exact
  path="/movies/:id"
  render={props => <Movie {...props} addToSavedList={this.addToSavedList} />}
/>; */
}
