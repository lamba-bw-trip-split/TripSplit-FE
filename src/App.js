import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import TripsList from "./components/TripsList/TripsList";
import TripCard from "./components/Trip/TripCard/TripCard";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { mountTokenCheck } from "./actions/";

import "./App.scss";
import Header from "./header/header";
const AddTripWithRouther = withRouter(TripCard);

class App extends React.Component {
	componentDidMount() {
		let token = localStorage.getItem("token");
		console.log(token);
		mountTokenCheck(token);
	}

	render() {
		return (
			<div className='App App-header'>
				<Header />
				<div className='App '>
					<Switch>
						<PrivateRoute exact path='/trips' component={TripsList} />
						<PrivateRoute
							exact
							path='/trips/:id'
							component={AddTripWithRouther}
						/>
						<Route exact path='/' component={Login} />
						<Route exact path='/register' component={SignUp} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(App);
