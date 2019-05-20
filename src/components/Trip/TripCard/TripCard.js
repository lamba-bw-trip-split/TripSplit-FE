import React from 'react';
import ActivityList from '../ActivityList/ActivityList';
import AddActivity from '../../AddActivity/AddActivity';

const TripCard = props => {
  return (
    <div>
      <h2>Trip: {props.trip.name}</h2>
      <p>Number of people: {props.trip.people.length}</p>
      <ActivityList activities={props.trip.activities} />
      <AddActivity
        people={props.trip.people}
        addItem={props.addItem}
        id={props.trip.id}
      />
    </div>
  );
};

export default TripCard;
