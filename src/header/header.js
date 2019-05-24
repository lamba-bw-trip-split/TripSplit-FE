import React, { Component } from "react";
import { connect } from "react-redux";
// import { logUserOut } from "../actions/";
import { Route, NavLink } from "react-router-dom";

class Header extends Component {
	logOut = e => {
		this.props.logUserOut();
	};

	render() {
		return (
			<div className='App App-header'>
				{this.props.isLoggedIn ? (
					<div className='loggedIn'>
						<div className='nav-bar'>
							<NavLink activeClassName='active' to='/trips'>
								{" "}
								Trips
							</NavLink>
							<NavLink onClick={() => localStorage.removeItem("token")} to='/'>
								Log out
							</NavLink>
						</div>
					</div>
				) : (
					<>
						<NavLink activeClassName='active' to='/'>
							Login
						</NavLink>
						<NavLink activeClassName='active' to='/register'>
							Register
						</NavLink>
					</>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
		isLoggedOut: state.isLoggedOut
	};
};

export default connect(
	mapStateToProps,
	{}
)(Header);
