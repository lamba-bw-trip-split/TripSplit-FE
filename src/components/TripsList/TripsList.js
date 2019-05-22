import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTrips } from '../../actions';

import Trip from '../Trip/Trip';

class TripsList extends React.Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    return (
      <div>
        {this.props.trips &&
          this.props.trips.map(trip => (
            <Link to={`/trips/${trip.id}`}>
              {/* <Trip key={trip.id} trip={trip} />; */}
            </Link>
          ))}
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
  { getTrips }
)(TripsList);
