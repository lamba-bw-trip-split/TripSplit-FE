import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import TripsList from './components/TripsList/TripsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/trips"> Trips</NavLink>
      </div>
      <header className="App-header">
        <Route path="/trips" component={TripsList} />
      </header>
    </div>
  );
}

export default App;
