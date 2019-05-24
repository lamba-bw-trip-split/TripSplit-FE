import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Form } from 'semantic-ui-react';
import { login } from '../../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    // .then(this.props.history.push('/trips'));
    // this.props.history.push('/trips');
    setTimeout(() => this.props.history.push('/trips'), 2000);
    // if (this.props.error !== '') {
    //   this.props.history.push('/trips');
    // }
  };

  render() {
    return (
      <div className="login-form">
        {this.props.signupMsg && <h2>{this.props.signupMsg}</h2>}
        <form className="form" onSubmit={this.login}>
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
          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <button className="button">
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="white" height="12" width="26" />
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>
        <h4>
          Don't have an account? <Link to="/signup">Register</Link>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn, signupMsg }) => ({
  error,
  loggingIn,
  signupMsg
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
