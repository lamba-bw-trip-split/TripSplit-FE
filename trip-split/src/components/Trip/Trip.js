import React from 'react';
import ActivityList from './ActivityList/ActivityList';

class Trip extends React.Component {
  state = {
    name: 'chicago',
    id: 0,
    total: 100,
    activities: [
      {
        name: 'Lunch',
        whoPaid: 'James',
        price: 100,
        id: 0
      },
      {
        name: 'Cabin',
        whoPaid: 'James',
        price: 400,
        id: 1
      }
    ],
    people: [
      {
        name: 'James',
        id: 0
      },
      {
        name: 'Carole',
        id: 1
      }
    ]
  };

  render() {
    return (
      <>
        <div>
          <h2>Trip: {this.state.name}</h2>
          <p>Number of people: {this.state.people.length}</p>
          <ActivityList activities={this.state.activities} />
        </div>
      </>
    );
  }
}

export default Trip;
