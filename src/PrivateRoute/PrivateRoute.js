import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { mountTokenCheck } from "../actions/";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				return localStorage.getItem("token") ? (
					<Component />
				) : (
					<Redirect to='/' />
				);
			}}
		/>
	);
};

const mapStateToProps = state => ({
	isLoggedIn: state.isLoggedIn,
	isLoggedOut: state.isLoggedOut,
	token: state.token
});

export default connect(
	mapStateToProps,
	{ mountTokenCheck }
)(PrivateRoute);
