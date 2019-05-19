import React from 'react';
import { Route } from 'react-router-dom';

import TripsList from './components/TripsList/TripsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TripsList />
        <Route />
      </header>
    </div>
  );
}

export default App;
