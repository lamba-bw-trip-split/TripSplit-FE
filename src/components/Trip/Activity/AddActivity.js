import React from 'react';

import { addExp } from '../../../actions';
import { connect } from 'react-redux';

class AddAcitivity extends React.Component {
  state = {
    bill: {
      description: '',
      amount: 0
    }
  };

  handleChange = e => {
    this.setState({
      bill: {
        ...this.state.bill,
        [e.target.name]: e.target.value
      }
    });
  };

  addExp = e => {
    e.preventDefault();
    this.props.addExp(this.props.id, this.state.bill);

    this.setState({
      bill: {
        description: '',
        amount: 0
      }
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.bill.description}
            onChange={this.handleChange}
          />
          <label htmlFor="amount">Amount: </label>
          <input
            type="text"
            name="amount"
            placeholder="Amount $"
            value={this.state.bill.amount}
            onChange={this.handleChange}
          />
          <button onClick={this.addExp}>Add</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addExp }
)(AddAcitivity);
