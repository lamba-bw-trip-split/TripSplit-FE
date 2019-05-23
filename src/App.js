import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import TripsList from './components/TripsList/TripsList';
import TripCard from './components/Trip/TripCard/TripCard';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { withRouter } from 'react-router-dom';

import './App.scss';
const AddTripWithRouther = withRouter(TripCard);

class App extends React.Component {
  render() {
    if (localStorage.getItem('token')) {
      return (
        <div className="App App-header">
          <div className="nav-bar">
            <NavLink activeClassName="active" to="/">
              {' '}
              Trips
            </NavLink>
            <NavLink
              onClick={() => localStorage.removeItem('token')}
              to="/login"
            >
              Log out
            </NavLink>
          </div>
          <header className="App-header">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={TripsList} />
            <PrivateRoute
              exact
              path="/trips/:id"
              component={AddTripWithRouther}
            />
          </header>
        </div>
      );
    } else {
      return (
        <div className="App App-header">
          <div className="nav-bar">
            <NavLink activeClassName="active" to="/">
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
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={TripsList} />
            <PrivateRoute
              exact
              path="/trips/:id"
              component={AddTripWithRouther}
            />
          </header>
        </div>
      );
    }
  }
}

export default App;
