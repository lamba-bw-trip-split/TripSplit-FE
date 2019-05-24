import React from 'react';
import { connect } from 'react-redux';
import { delExp } from '../../../actions';

class Activity extends React.Component {
  componentDidMount() {
    this.props.sum(this.props.activity.amount);
  }

  render() {
    return (
      <div style={border}>
        <p>
          Name: {this.props.activity.description}{' '}
          <span
            style={red}
            onClick={() =>
              this.props.delExp(
                this.props.activity.expense_id,
                this.props.activity.trip_id
              )
            }
          >
            {' '}
            X
          </span>
        </p>
        <p>Amount: ${this.props.activity.amount}.00</p>
      </div>
    );
  }
}

const border = {
  border: '1px solid white'
};

export default connect(
  null,
  { delExp }
)(Activity);

const red = {
  color: 'red',
  cursor: 'pointer',
  fontSize: '30px'
};
