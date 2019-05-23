import React from 'react';
import { connect } from 'react-redux';
import { delExp } from '../../../actions';

const Activity = props => {
  return (
    <div style={border}>
      <p>
        Name: {props.activity.description}{' '}
        <span
          style={red}
          onClick={() =>
            props.delExp(props.activity.expense_id, props.activity.trip_id)
          }
        >
          {' '}
          X
        </span>
      </p>
      <p>Amount: ${props.activity.amount}.00</p>
    </div>
  );
};

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
