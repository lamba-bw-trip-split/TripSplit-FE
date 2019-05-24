import React from 'react';
import Loader from 'react-loader-spinner';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../../actions';

class Signup extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      email: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.credentials);
  };

  render() {
    return (
      <div className="login-form">
        <h3>Already have an account? Click to {<Link to="/">Log in</Link>}</h3>
        <form className="form" onSubmit={this.signup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <button className="button">
            {this.props.signingUp ? (
              <Loader type="ThreeDots" color="white" height="12" width="26" />
            ) : (
              <span>Sign Up</span>
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ error, signingUp, signedUp }) => ({
  error,
  signingUp,
  signedUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
