import React from 'react';
import { connect } from 'react-redux';

import Trip from '../Trip/Trip';

class TripsList extends React.Component {
  render() {
    console.log(this.props.trips);
    return (
      <div>
        {this.props.trips.map(trip => {
          return <Trip key={trip.id} trip={trip} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

export default connect(
  mapStateToProps,
  {}
)(TripsList);
