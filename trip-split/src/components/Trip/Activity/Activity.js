import React from 'react';

const Activity = props => {
  return (
    <div>
      <p>Name: {props.activity.name}</p>
      <p>Total: {props.activity.price}</p>
      <p>Paid by: {props.activity.whoPaid}</p>
    </div>
  );
};

export default Activity;
