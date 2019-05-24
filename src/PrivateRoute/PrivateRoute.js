import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				console.log(rest);
				return rest.isLoggedIn ? <Component /> : <Redirect to='/' />;
			}}
		/>
	);
};

const mapStateToProps = state => ({
	isLoggedIn: state.isLoggedIn,
	isLoggedOut: state.isLoggedOut
});

export default connect(
	mapStateToProps,
	{}
)(PrivateRoute);
