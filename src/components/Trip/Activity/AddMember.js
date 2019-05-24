import React from 'react';
import { axiosWithAuth } from '../../../axiosWithAuth';

class AddMember extends React.Component {
  state = {
    user: {
      username: ''
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state.user,
      [e.target.name]: e.target.value
    });
  };

  addMember = e => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/api/trips/${this.props.id}/members`, this.state.user)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.user.username}
            onChange={this.handleChange}
          />
          <button onClick={this.addMember}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddMember;
