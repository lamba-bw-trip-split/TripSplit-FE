import React from 'react';

const Activity = props => {
  return (
    <div style={border}>
      <p>Name: {props.activity.name}</p>
      <p>Total: {props.activity.price}</p>
      <p>Paid by: {props.activity.whoPaid}</p>
    </div>
  );
};

const border = {
  border: '1px solid white'
};

export default Activity;
