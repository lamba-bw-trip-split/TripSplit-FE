import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import TripsList from './components/TripsList/TripsList';
import TripCard from './components/Trip/TripCard/TripCard';
import Login from './components/Login/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/trips"> Trips</NavLink>
      </div>
      <header className="App-header">
        <Route path="/login" component={Login} />
        <Route path="/trips" component={TripsList} />
        <Route path="/tirps/:id" component={TripCard} />
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
